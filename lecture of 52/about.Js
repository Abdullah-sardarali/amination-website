


var manu = document.querySelector("#nav-part2 i")
var full = document.querySelector("#full-scr-nav")

var flag = 0;

manu.addEventListener("click",function(){

    if(flag == 0){
        full.style.top = "0%"
        document.querySelector("#nav h2").style.color = "#222"
        document.querySelector("#nav h3").style.color = "#222"
        document.querySelector("#nav i").style.color = "#222"
        flag = 1
    }
    else{
        full.style.top = "-100%"
        document.querySelector("#nav h2").style.color = "#dadada"
        document.querySelector("#nav h3").style.color = "#dadada"
        document.querySelector("#nav i").style.color = "#dadada"
        flage = 1
    }

})

var tl = gsap.timeline();

tl.from("#page1 h1",{
    y:60,
    opacity: 0.7,
    duration: 0.8,
})
.from("#page1 h2",{
    y: 50,
    opacity: 0.6,
    duration: 0.7,
    delay: "-0.4",
})
.from("#page1 h3",{
    y: 50,
    opacity: 0.6,
    duration: 0.7,
    delay: "-0.4",
})
gsap.to("#page2 img",{
    scale:0.98,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"body",
        markers:true,
        start:"top 90%",
        end:"top 0%",
        scrube:3,
    }
})
gsap.from("#page2 h1",{
    rotateX:"90deg",
    opacity:1,
    scrollTrigger:{
        trigger:"h11",
        scroller:"body",
        markers:"true",
        start:"top 70%",
        end:"top 60%",
        scrube:"5",
    }
})







