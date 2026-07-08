history.replaceState(null, "", window.location.pathname);

/* ================= PRELOADER ================= */
window.addEventListener("load",()=>{

    document
        .getElementById("preloader")
        .classList.add("hide");

});

/* ================= SCROLL TO TOP ================= */
const scrollTopBtn =
document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        scrollTopBtn.style.display="block";

    }else{

        scrollTopBtn.style.display="none";

    }

});

scrollTopBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ================= NAVBAR =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    
    let current = "";
    
    sections.forEach(section => {
        
        const sectionTop = section.offsetTop - 150;
        
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
        
    });
    
    navLinks.forEach(link => {
        
        link.classList.remove("active");
        
        if (link.getAttribute("href") === "#" + current) {
            
            link.classList.add("active");
            
        }
        
    });
    
});

/* ================= TYPING EFFECT ================= */
const text = "Staff Mobile Engineer. iOS • Flutter • React Native.";

const typing = document.getElementById("typing");

typing.classList.add("typing");

let i = 0;

function type() {

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 45);

    } else {

        typing.classList.remove("typing");
        typing.style.borderRight = "none";

    }

}

type();

// ================= ABOUT =================
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 60;

        const update = () => {

            current += increment;

            if(current < target){

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(update);

            }else{

                if(target === 100){

                    counter.innerText = "100K+";

                }else if(target === 10){

                    counter.innerText = "10+";

                }else if(target === 30){

                    counter.innerText = "30+";

                }else{

                    counter.innerText = target;

                }

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

},{
    threshold:0.5
});

counters.forEach(counter => counterObserver.observe(counter));

// ================= SKILLS =================
const skillSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            skillBars.forEach(bar => {

                const width = bar.dataset.width;

                bar.style.width = width + "%";

            });

        }

    });

},{
    threshold:0.35
});

skillObserver.observe(skillSection);

// ================= SCROLL PROGRESS BAR =================
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ================= REVEAL ANIMATION =================
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

            revealObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(element => {

    revealObserver.observe(element);

});

// ================= MOBILE MENU =================
const menuBtn = document.getElementById("menu-btn");
const newNavLinks = document.querySelector(".nav-links");

if (menuBtn && newNavLinks) {

    menuBtn.addEventListener("click", function () {
        newNavLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(function (link) {

        link.addEventListener("click", function () {

            newNavLinks.classList.remove("active");

        });

    });

}

document.getElementById("year").textContent =
new Date().getFullYear();
