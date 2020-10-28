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




gsap.from(".nav_dropdown",{duration:3, opacity:0, y: -800});

// GSAP



// MEGA MENU

// let navItem = document.querySelectorAll('.nav-item');
// let navDropdown = document.querySelector('.nav_dropdown');

// function showDrop(){
//     navDropdown.style.display = 'block';
// }




// 1
// console.log(navItem.length);
// navItem.forEach(this.addEventListener('mouseover', showDrop))


// 2

// navItem.forEach(addEventListener('mouseover', showDrop))

// navItem.forEach(item => {
//     item.addEventListener('mouseover', event => {
//         navDropdown.style.display = 'block';
//     })
// })

// 3
// document.querySelectorAll('.nav_item').forEach(item => {
//     item.addEventListener('click', event => {
//         document.querySelector('.nav_dropdown').style.display = 'block'
//     })
// })


// 4

// function toggleModal() {
//     navDropdown.classList.toggle("visible")
// }

// navItem.forEach(function (i){
//     i.addEventListener('mouseover', toggleModal)
// })

document.querySelectorAll('.nav-item').forEach(function(li) {
    li.addEventListener('mouseover', function(e) {
    console.log('over');
      e.currentTarget.querySelector('.nav_dropdown').style.display = 'block';
    });
    li.addEventListener('mouseout', function(e) {
    console.log('out');
      e.currentTarget.querySelector('.nav_dropdown').style.display = 'none';
    });
  });