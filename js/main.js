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