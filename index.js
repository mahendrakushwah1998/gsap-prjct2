let time=gsap.timeline()

time.from("#nav img, #nav h3, #nav button, #nav h4",{
    y:-100,
    duration:1,
    delay:0.3,
    opacity:0,
    stagger:0.2
})

time.from("#main h1",{
    y:100,
    opacity:0,
    stagger:0.3,
    duration:0.7
    
})

time.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.3
})
time.from("h5",{
    scale:0,
    opacity:0
})
time.to("h5",{
    y:20,
    duration:0.7,
    repeat:-1,

    yoyo:true
})