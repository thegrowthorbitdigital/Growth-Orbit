// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});


// ===============================
// Sticky Header
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ===============================
// Fade Animation
// ===============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".service-card,.portfolio-card,.testimonial-card,.box,.why-box,.stat-box").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});