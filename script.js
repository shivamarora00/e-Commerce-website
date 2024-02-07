var list =document.getElementById("list"); 
var menu =document.getElementById("menu");

menu.addEventListener("click",()=>{
    if (list.style.display == "none") {
        list.style.display = "block";
    }else{
        list.style.display = "none";
    }
})
// loader timer //
var tl= gsap.timeline();

function time() {
    var a =0;
    setInterval(function(){
        a = a + Math.floor(Math.random()*15);
        if (a<100) {
            document.querySelector("#loader h1").innerHTML = a + "%";
            
        }
        else{
            a = 100;
            document.querySelector("#loader h1").innerHTML = a + "%";
        }

    }, 110);
}
time()


// loader timer ends//


// loader gsap //
var tl = gsap.timeline()
tl.to('#loader h1',{
scale:2,
duration:1,
delay:0.5
})


tl.to('#loader',{
    top:"-100vh",
    delay:0.5,
    duration:2
})
// loader gsap ends //
