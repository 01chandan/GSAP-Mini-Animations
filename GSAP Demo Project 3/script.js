var tl = gsap.timeline();
function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*80)
        if (a<100) {   
            document.querySelector(".loader h1").innerHTML = a + "%"
        }else{
            a = 100
            document.querySelector(".loader h1").innerHTML = a + "%"
        }
    },150)
}
gsap.to(".page-1 h1",{
    fontWeight:"50",
    transform: "translateX(-170%)",
    scrollTrigger: {
        trigger: ".page-1",
        scroller:"body",
        Start:"0",
        end: "top -150%",
        scrub:2,
        pin:true
    }
})
tl.to(".loader",{
    top:"-100vh",
    duration:1.5,
    delay:0.5
})
tl.to(".loader h1",{    
    duration:1,
    onStart: time()
})

