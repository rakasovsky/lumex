// GSAP
const tl = gsap.timeline();

tl.from(".lumex__content", {duration: 2, scale: 0.1,  x: 1500});
tl.from(".content",{duration:2, opacity:0, y:200, stagger: 0.25});
gsap.from(".lumex__video", {duration: 2, scale: 0.3,  x: -1500});


const catBlck = gsap.timeline({
    scrollTrigger: {
        trigger: ".cat_block",
        start: "top bottom"
    }
})

catBlck.from(".cat_block",{duration:1, opacity:0, y:200, stagger:0.5});




const lbl = gsap.timeline({
    scrollTrigger: {
        trigger: ".lbl",
        start: "top bottom"
    }
})

lbl.from(".lbl",{duration:1, opacity:0, x:-100}),
lbl.from(".txt", {duration:1, opacity:0, y: 100,stagger: 0.25})



const mmTl = gsap.timeline({
    paused: true
});

mmTl.from(".nav_dropdown",{duration:.5, opacity:0, y: -400});

// GSAP



// MEGA MENU

// document.querySelectorAll('.nav-item').forEach(function(li) {
//     li.addEventListener('mouseover', function(e) {
//     console.log('over');
//       e.currentTarget.querySelector('.nav_dropdown').style.display = 'block';
//     });
//     li.addEventListener('mouseout', function(e) {
//     console.log('out');
//       e.currentTarget.querySelector('.nav_dropdown').style.display = 'none';
//     });
//   });

document.querySelectorAll('.nav-item').forEach(function(li) {
    li.addEventListener('mouseover', function(e) {
    console.log('over');
      e.currentTarget.querySelector('.nav_dropdown').style.display = 'block';
      mmTl.restart();
    });
    li.addEventListener('mouseout', function(e) {
    console.log('out');
      e.currentTarget.querySelector('.nav_dropdown').style.display = 'none';
      mmTl.reverse();
    });
  });