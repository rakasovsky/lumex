const tl = gsap.timeline();

tl.from(".lumex__content", {duration: 2, x: 1500, ease: "power4" });
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
