"use strict";

// Mobile menu dropdown
// document.querySelectorAll('.m_li').forEach(function(li) { 
//     var drp = li.querySelector(".dropdown_container_mobile");
//     li.addEventListener('click', function (e){
//         drp.classList.toggle("hidden");
//     })
//    })
// document.querySelectorAll('.m_li').forEach(function(li) { 
//     const thisItem = this.parentNode;
//     var drp = li.querySelector(".dropdown_container_mobile");
//     li.addEventListener('click', function (e){
//        if (thisItem == li) {
//             drp.classList.add("hidden");
//        } else {
//             drp.classList.toggle("hidden");
//        }
//     })
//    })
function initAccordion(accordionElem) {
  //when panel is clicked, handlePanelClick is called.          
  function handlePanelClick(event) {
    showPanel(event.currentTarget);
  } //Hide currentPanel and show new panel.  


  function showPanel(panel) {
    //Hide current one. First time it will be null. 
    var expandedPanel = accordionElem.querySelector(".is-Open");

    if (expandedPanel) {
      expandedPanel.classList.remove("is-Open");
    } //Show new one


    if (expandedPanel !== panel) {
      panel.classList.add("is-Open");
    }
  }

  var allPanelElems = accordionElem.querySelectorAll(".m_li");

  for (var i = 0, len = allPanelElems.length; i < len; i++) {
    allPanelElems[i].addEventListener("click", handlePanelClick);
  } //By Default Show first panel
  // showPanel(allPanelElems[0])

}

initAccordion(document.getElementById("menu")); // GSAP

var tl = gsap.timeline();
tl.from(".lumex__content", {
  duration: 2,
  x: 1500
});
tl.from(".content", {
  duration: 2,
  opacity: 0,
  y: 200,
  stagger: 0.25
});
gsap.from(".lumex__video", {
  duration: 2,
  scale: 0.3,
  x: -1500
});
var catBlck = gsap.timeline({
  scrollTrigger: {
    trigger: ".cat_block",
    start: "top bottom"
  }
});
catBlck.from(".cat_block", {
  duration: 1,
  opacity: 0,
  y: 200,
  stagger: 0.5
});
var lbl = gsap.timeline({
  scrollTrigger: {
    trigger: ".lbl",
    start: "top bottom"
  }
});
lbl.from(".lbl", {
  duration: 1,
  opacity: 0,
  x: -100
}), lbl.from(".txt", {
  duration: 1,
  opacity: 0,
  y: 100,
  stagger: 0.25
});
var MoP = gsap.timeline({
  scrollTrigger: {
    trigger: ".mop",
    start: "top bottom"
  }
});
MoP.from(".fl", {
  duration: .5,
  opacity: 0,
  x: -400
});
MoP.from(".txt2", {
  duration: 1,
  opacity: 0,
  y: 100,
  stagger: 0.25
});
var JoC = gsap.timeline({
  scrollTrigger: {
    trigger: ".joc",
    start: "top bottom"
  }
});
JoC.from(".txt3", {
  duration: 1,
  opacity: 0,
  y: 100,
  stagger: 0.25
}); // const mmTl = gsap.timeline({
//     paused: true
// });
// mmTl.from(".nav_dropdown",{duration:.5, opacity:0, y: gsap.utils.random(-100, 100, true), ease: Power3.easeOut});
// mmTl.to(".nav_dropdown",{duration:.5, opacity:0, y: 0, ease: Power3.easeOut});
// GSAP
// MEGA MENU

document.querySelectorAll('.nav-trigger').forEach(function (li) {
  var drp = gsap.timeline({
    defaults: {
      duration: 1
    },
    paused: true
  });
  var dr = li.querySelector('.nav_dropdown');
  var dp = li.querySelector('.drp-list');
  var dx = li.querySelectorAll('.drp_card');
  drp.to(dr, {
    duration: .5,
    scaleY: 1,
    height: '65vh'
  }).from(dp, {
    duration: .5,
    opacity: 0,
    y: 0,
    stagger: 0.25
  }, "-=1").from(dx, {
    duration: .5,
    opacity: 0,
    x: "550%",
    stagger: 0.25,
    ease: "power4.in"
  }, "-=1").reversed(true);
  li.addEventListener('mouseover', function (e) {
    drp.play();
  });
  li.addEventListener('mouseout', function (e) {
    console.log('out');
    drp.reverse();
  }); // li.querySelectorAll(".list_trigger").forEach(function (h) {
  //     let card_container = document.querySelectorAll('.inner_container');
  //     h.addEventListener("mouseover", function () {
  //         card_container.forEach(function(i){
  //             i.classList.add('active_trigger');
  //         })
  //         this.classList.add('active');
  //     })
  //     h.addEventListener("mouseleave", function () {
  //         card_container.forEach(function(i){
  //             i.classList.remove('active_trigger');
  //         })
  //         this.classList.remove('active');
  //     })
  // })

  li.querySelectorAll(".list_trigger").forEach(function (h) {
    /*
      Both hovered link and div, which correponds to this link have the same value of attribute.
      Example: <li data-link="ip-card">...</li>, <div data-card="ip-card">...</li>
    */
    var linkName = h.getAttribute('data-link');
    var card_container = document.querySelector('[data-card="' + linkName + '"]');
    h.addEventListener("mouseover", function () {
      card_container.scrollIntoView(); //maybe scrollIntoViewIfNeeded()

      this.classList.add('active'); //TODO? change just to hovered style: li.list_trigger:hover {...}
    }); //   card_container.addEventListener("mouseover", function () {
    //       card_container.scrollIntoView(); //maybe scrollIntoViewIfNeeded()
    //   })

    h.addEventListener("mouseleave", function () {
      this.classList.remove('active');
    });
  });
}); // Q/A CARDS 

document.querySelectorAll(".cat_block").forEach(function (f) {
  var qa = gsap.timeline({
    defaults: {
      duration: 1
    },
    paused: true
  });
  var tf = f.querySelector(".title__front");
  var tfd = f.querySelector(".title__front div");
  var tb = f.querySelector(".title__back");
  var tbd = f.querySelector(".title__back div");
  qa.to(tf, {
    duration: 0.5,
    width: "100%"
  }).to(tfd, {
    duration: 0.5,
    y: 20,
    opacity: 0
  }).to(tf, {
    duration: 0.5,
    opacity: 0
  }).to(tb, {
    duration: 0.5,
    opacity: 1
  }, "-=1").from(tbd, {
    duration: 0.5,
    y: 20,
    opacity: 0
  }, "-=1");
  f.addEventListener("mouseover", function (e) {
    qa.play();
  });
  f.addEventListener("mouseout", function (e) {
    qa.reverse();
  });
}); // console.clear();