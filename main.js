// =====================================
// ROYAL MIST - MAIN JAVASCRIPT
// =====================================


// ===============================
// menu bar
// ===============================
var navbar = document.querySelector(".navbar");

var menuBtn = document.getElementById("menuBtn");

var mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

});


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

var revealElements = document.querySelectorAll(".reveal");

var observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


revealElements.forEach(function (element) {

    observer.observe(element);

});


// ===============================
// WHATSAPP ORDER FUNCTION
// ===============================

function orderOnWhatsApp() {

    var phoneNumber = "923001234567";

    var productName = "Royal Mist Golden Oud";

    var message =
        "Hello Royal Mist!%0A%0A" +
        "I am interested in ordering:%0A" +
        "Product: " + productName + "%0A%0A" +
        "Please provide me with more details.";

    var whatsappLink =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        message;

    window.open(whatsappLink, "_blank");

}


// ===============================
// PRODUCT ORDER BUTTON
// ===============================

var orderBtn = document.getElementById("orderBtn");

orderBtn.addEventListener("click", function () {

    orderOnWhatsApp();

});


// ===============================
// CTA ORDER BUTTON
// ===============================

var ctaBtn = document.getElementById("ctaBtn");

ctaBtn.addEventListener("click", function () {

    orderOnWhatsApp();

});


// ===============================
// FOOTER ORDER BUTTON
// ===============================

var footerOrder = document.getElementById("footerOrder");

footerOrder.addEventListener("click", function () {

    orderOnWhatsApp();

});


// ===============================
// PARALLAX HERO EFFECT
// ===============================

var heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove", function (event) {

    var x = (window.innerWidth / 2 - event.clientX) / 80;

    var y = (window.innerHeight / 2 - event.clientY) / 80;

    heroImage.style.transform =
        "translate(" + x + "px, " + y + "px)";

});


// ===============================
// SMOOTH IMAGE LOAD
// ===============================

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});



// =========================
// CUSTOM GLOW CURSOR
// =========================

var cursorDot = document.querySelector(".cursor-dot");
var cursorGlow = document.querySelector(".cursor-glow");

var mouseX = 0;
var mouseY = 0;

var glowX = 0;
var glowY = 0;


// Mouse move
document.addEventListener("mousemove", function(event) {

    mouseX = event.clientX;
    mouseY = event.clientY;

    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";

});


// Smooth glow movement
function animateCursor() {

    glowX = glowX + (mouseX - glowX) * 0.12;
    glowY = glowY + (mouseY - glowY) * 0.12;

    cursorGlow.style.left = glowX + "px";
    cursorGlow.style.top = glowY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();


// Hover effect
var hoverItems = document.querySelectorAll("a, button");

hoverItems.forEach(function(item) {

    item.addEventListener("mouseenter", function() {

        cursorGlow.classList.add("hover");

    });

    item.addEventListener("mouseleave", function() {

        cursorGlow.classList.remove("hover");

    });

});







