"use strict";

// GSAP
var tl = gsap.timeline();
tl.from(".lumex__content", {
  duration: 2,
  scale: 0.1,
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

var drp = gsap.timeline({
  defaults: {
    duration: 1
  },
  paused: true
});
drp.to('.nav_dropdown', {
  duration: .5,
  scaleY: 1,
  height: '70vh'
});
drp.from('.drp-list', {
  duration: .5,
  opacity: 0,
  y: 0,
  stagger: 0.25
}, "-=1");
drp.from('.drp_card', {
  duration: .5,
  opacity: 0,
  x: "550%",
  stagger: 0.25,
  ease: "power4.in"
}, "-=1");
drp.reversed(true);
document.querySelectorAll('.nav-trigger').forEach(function (li) {
  li.addEventListener('mouseover', function (e) {
    console.log('over');
    drp.reversed(!drp.reversed());
    if (drp.reversed()) drp.reverse();else {
      drp.play();
    }
  });
  li.addEventListener('mouseout', function (e) {
    console.log('out');
    drp.reverse();
  });
}); // Q/A CARDS 
// const qa = gsap.timeline({
//     defaults: {duration: 1},
//     paused: true
// })
// qa.to('.title__front',{duration: .5, width: "100%"})
//    .to('.title__front div', {duration: .5, y: 20, opacity:0})
//    .to('.title__front',{duration: .5, opacity: 0})
//    .to('.title__back',{duration: .5, opacity: 1},"-=1")
//    .from('.title__back div', {duration: .5, y: 20, opacity:0},"-=1")
// document.querySelectorAll(".cloud__block2").forEach(function(f){
//     f.addEventListener('mouseover', function(e) {
//             qa.play();
//     })
//     f.addEventListener('mouseout', function(e) {
//       qa.reverse();
//     })
// })
// 2
// document.querySelectorAll(".cloud__block2").forEach(function(f){
//     const qa = gsap.timeline({
//         defaults: {duration: 1},
//         paused: true
//     })
//     f.addEventListener('mouseover', function(e) {
//         var x = e.target.closest('.cloud__block2');
//         var a = x.querySelector('.title__front');
//         var b = x.querySelector('.title__front div');
//         var c = x.querySelector('.title__back');
//         var d = x.querySelector('.title__back div');
//         qa.to(a, {duration: .5, width: "100%"})
//             .to(b, {duration: .5, y: 20, opacity:0})
//             .to(a, {duration: .5, opacity: 0})
//             .to(c, {duration: .5, opacity:1},"-=1")
//             .from(d, {duration: .5, y: 20, opacity:0},"-=1")
//         qa.play();      
//     })
//     f.addEventListener('mouseout', function(e) {
//       qa.reverse();
//     })
// })

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
}); // document.querySelectorAll('.nav-item').forEach(function(li) {
//     li.addEventListener('mouseover', function(e) {
//     console.log('over');
//       e.currentTarget.querySelector('.nav_dropdown').style.display = 'block';
//     });
//     li.addEventListener('mouseout', function(e) {
//     console.log('out');
//       e.currentTarget.querySelector('.nav_dropdown').style.display = 'none';
//     });
//   });
// document.querySelectorAll('.nav-item').forEach(function(li) {
//     const mmTl = gsap.timeline({
//         paused: true
//     });
//     mmTl.from(".nav_dropdown",{duration:1, opacity:0, y: gsap.utils.random(-100, 100, true), ease: Power3.easeOut});
//     li.addEventListener('mouseover', function(e) {
//     console.log('over');
//       e.currentTarget.querySelector('.nav_dropdown').style.display = 'block';
//       mmTl.play();
//     });
//     li.addEventListener('mouseout', function(e) {
//     console.log('out');
//       e.currentTarget.querySelector('.nav_dropdown').style.display = 'none';
//       mmTl.reverse();
//     });
//   });
// test