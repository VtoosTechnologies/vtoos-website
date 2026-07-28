//==================================================
// VTOOS WEBSITE V2
// Main JavaScript
//==================================================

//==============================================
// Preloader
//==============================================

window.addEventListener("load", () => {

const preloader = document.getElementById("preloader");

if(preloader){

preloader.style.opacity = "0";

setTimeout(()=>{

preloader.style.display="none";

},500);

}

});

//==============================================
// Typing Animation
//==============================================

const typing = document.getElementById("typing");

const words = [

"Smart Digital Solutions",

"ERP Development",

"Business Websites",

"Mobile Applications",

"Cloud Software",

"Custom Software"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

if(!typing) return;

const currentWord = words[wordIndex];

if(!deleting){

typing.textContent = currentWord.substring(0,charIndex);

charIndex++;

if(charIndex > currentWord.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}else{

typing.textContent = currentWord.substring(0,charIndex);

charIndex--;

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,deleting ? 40 : 90);

}

typeEffect();

//==============================================
// Sticky Navbar
//==============================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(!navbar) return;

if(window.scrollY>50){

navbar.style.boxShadow="0 15px 35px rgba(0,0,0,.15)";

navbar.style.transition=".3s";

}else{

navbar.style.boxShadow="0 20px 40px rgba(0,0,0,.08)";

}

});

//==============================================
// Smooth Scroll
//==============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

//==============================================
// Scroll Reveal Animation
//==============================================

const revealElements=document.querySelectorAll(

".service-card,.tech-card,.dashboard-card,.contact-cta"

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.15

});

revealElements.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".8s ease";

observer.observe(item);

});

//==============================================
// Active Menu
//==============================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

//==============================================
// Console Welcome
//==============================================

console.log(

"%cWelcome to VTOOS Software Solutions",

"color:#0A66C2;font-size:18px;font-weight:bold;"

);

console.log(

"%cDeveloped with ❤️ by VTOOS",

"color:#555;font-size:14px;"

);
/*====================================
Scroll To Top
====================================*/

const scrollBtn =
document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollBtn.style.display="flex";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
