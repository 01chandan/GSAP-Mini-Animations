var tl = gsap.timeline();

tl.from(".nav",{
    opacity:0,
    x:-200,
    delay:0.3
})
tl.from(".nav-div h2, .nav-options p, .sign-up p, .other .line, .other .other-2",{
    y:-200,
    duration:1,
    stagger:0.1,
    opacity:0
})
tl.from(".left-part h1",{
    opacity:0,
    x:-300,
   stagger:0.3 
})
tl.from(".right-part img",{
    opacity:0,
    scale:1.5,
    duration:0.5,
    delay:0.3
})

gsap.from(".div2 .box1",{
    opacity:0,
    y:-50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: { //Make sure it is cameLcase
        trigger: ".div2 .box1",
        scroller: "body"
    }
})