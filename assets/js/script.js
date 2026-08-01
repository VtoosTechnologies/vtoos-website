//=========================================
// VTOOS Software Solutions
// Part 1C
//=========================================

// Preloader

window.addEventListener("load", () => {

    const preloader =
    document.getElementById("preloader");

    if(preloader){

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        },500);

    }

});

//=========================================
// Sticky Navbar
//=========================================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 40){

        navbar.style.background =
        "rgba(255,255,255,.92)";

        navbar.style.boxShadow =
        "0 15px 35px rgba(0,0,0,.10)";

    }

    else{

        navbar.style.background =
        "rgba(255,255,255,.75)";

        navbar.style.boxShadow =
        "0 15px 40px rgba(0,0,0,.08)";

    }

});

//=========================================
// Smooth Scroll
//=========================================

document
.querySelectorAll("a[href^='#']")
.forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

//=========================================
// Hero Fade
//=========================================

const hero =
document.querySelector(".hero");

hero.style.opacity="0";
hero.style.transform="translateY(40px)";

setTimeout(()=>{

hero.style.transition="1s";

hero.style.opacity="1";

hero.style.transform="translateY(0)";

},300);

//=========================================
// EmailJS Contact Form
//=========================================

emailjs.init({
    publicKey: "s12-QiLTDg8DaLzpu"
});
console.log("Contact Form Script Loaded");
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.send(
            "service_qxz51ny",
            "template_fd2y3v8",
            {
                from_name: document.getElementById("name").value,
                from_email: document.getElementById("email").value,
                company: document.getElementById("company").value,
                message: document.getElementById("message").value
            }
        )
        .then(function () {

            alert("✅ Thank you! Your enquiry has been sent successfully.");

            contactForm.reset();

        })
        .catch(function (error) {

            console.error(error);

            alert("❌ Failed to send enquiry. Please try again.");

        });

    });

}
