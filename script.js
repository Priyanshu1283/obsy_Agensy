


var t = gsap.timeline()
t.from(".line h1", {
    y: 150,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5
})
t.from("#line1-part1, .line h2", {
    opacity: 0,
    onStart: (function () {
        var h5timmer = document.querySelector("#line1-part1 h5")
        var grow = 0
        setInterval(function () {
            if (grow < 100) {
                h5timmer.innerHTML = grow++
            } else {
                h5timmer.innerHTML = grow
            }
        }, 30)
    })
})
t.to(".line h2", {
    animationName: "anime",
    opacity: 1
})
t.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 3.5,
});
t.from("#page1", {
    delay: 0.2,
    y: 1200,
    opacity: 0,
    duration: 0.5,
    // ease:power4
})
t.to("#loader", {
    display: "none"
})