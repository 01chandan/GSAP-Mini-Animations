var tl = gsap.timeline();

tl.from("nav img, nav .options, nav .login-options", {
    y:-100,
    duration: 1,
    Delay:0.5,
    opacity:0,
    stagger:0.5
})

tl.from(".hero h1",{
    y:100,
    opacity: 0,
    duration:1,
    stagger:0.2
})

tl.from("#image1, #image4, #image2, #image3",{
    scale:0,
    opacity: 0,
    // duration:1.8,
    stagger:0.3
})
tl.from(".scroll",{
    opacity:0,
    scale: 0,
})
tl.to(".scroll",{
    y:10,
    repeat:-1,
    duration:0.8,
    yoyo:true
})
