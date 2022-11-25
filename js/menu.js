"use script";

function showMenu() {
  document.querySelector("#dropdown-nav").style.display = "block";
  document.querySelector("#headline").style.display = "none";
  document.querySelector("#projects").style.display = "none";
  document.querySelector("#about-me").style.display = "none";
  document.querySelector("#form").style.display = "none";
  document.querySelector("#contact-social-form").style.display = "none";
  document.querySelector("#social-media-footer-img").style.paddingTop = "36rem";
}

function hideMenu() {
  document.querySelector("#dropdown-nav").style.display = "none";
  document.querySelector("#headline").style.display = "block";
  document.querySelector("#projects").style.display = "block";
  document.querySelector("#about-me").style.display = "block";
  document.querySelector("#form").style.display = "block";
  document.querySelector("#contact-social-form").style.display = "flex";
  document.querySelector("#social-media-footer-img").style.paddingTop = "0";
}

// click on the hamburger icon
document.getElementById("hidden-img").addEventListener("click", showMenu);

// click on the close icon
document.getElementById("nav-close-btn").addEventListener("click", hideMenu);
document.getElementById("dropdown-menu-portfolio").addEventListener("click", hideMenu);
document.getElementById("dropdown-menu-about").addEventListener("click", hideMenu);
document.getElementById("dropdown-menu-contact").addEventListener("click", hideMenu);

// Scroll events
let observerPortfolio = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting > 0) {
    document.querySelector("#menu-portfolio").style.opacity = "0.5";
  } else {
    document.querySelector("#menu-about").style.opacity = "1";
    document.querySelector("#menu-contact").style.opacity = "1";
    document.querySelector("#menu-portfolio").style.opacity = "1";
  }
}, { threshold: [0] });

observerPortfolio.observe(document.querySelector("#projects"));

let observerAbout = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting > 0) {
    document.querySelector("#menu-about").style.opacity = "0.5";
  } else {
    document.querySelector("#menu-about").style.opacity = "1";
    document.querySelector("#menu-portfolio").style.opacity = "1";
    document.querySelector("#menu-contact").style.opacity = "1";
  }
}, { threshold: [0] });

observerAbout.observe(document.querySelector("#about-me"));

let observerContact = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting > 0) {
    document.querySelector("#menu-contact").style.opacity = "0.5";
  } else {
    document.querySelector("#menu-contact").style.opacity = "1";
    document.querySelector("#menu-about").style.opacity = "1";
    document.querySelector("#menu-portfolio").style.opacity = "1";
  }
}, { threshold: [0] });

observerContact.observe(document.querySelector("#form"));