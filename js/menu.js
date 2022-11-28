'use script';

function showMenu() {
  document.querySelector('#dropdown-nav').style.display = 'block';
  document.querySelector('#headline').style.display = 'none';
  document.querySelector('#projects').style.display = 'none';
  document.querySelector('#about-me').style.display = 'none';
  document.querySelector('#form').style.display = 'none';
  document.querySelector('#contact-social-form').style.display = 'none';
  document.querySelector('#social-media-footer-img').style.paddingTop = '36rem';
}

function hideMenu() {
  document.querySelector('#dropdown-nav').style.display = 'none';
  document.querySelector('#headline').style.display = 'block';
  document.querySelector('#projects').style.display = 'block';
  document.querySelector('#about-me').style.display = 'block';
  document.querySelector('#form').style.display = 'block';
  document.querySelector('#contact-social-form').style.display = 'flex';
  document.querySelector('#social-media-footer-img').style.paddingTop = '0';
}

// click on the hamburger icon
document.getElementById('hidden-img').addEventListener('click', showMenu);

// click on the close icon
document.getElementById('nav-close-btn').addEventListener('click', hideMenu);
document.getElementById('dropdown-menu-portfolio').addEventListener('click', hideMenu);
document.getElementById('dropdown-menu-about').addEventListener('click', hideMenu);
document.getElementById('dropdown-menu-contact').addEventListener('click', hideMenu);

// Scroll events
const observerPortfolio = new IntersectionObserver(((entries) => {
  if (entries[0].isIntersecting > 0) {
    document.querySelector('#menu-portfolio').style.opacity = '0.5';
  } else {
    document.querySelector('#menu-about').style.opacity = '1';
    document.querySelector('#menu-contact').style.opacity = '1';
    document.querySelector('#menu-portfolio').style.opacity = '1';
  }
}), { threshold: [0] });

observerPortfolio.observe(document.querySelector('#projects'));

const observerAbout = new IntersectionObserver(((entries) => {
  if (entries[0].isIntersecting > 0) {
    document.querySelector('#menu-about').style.opacity = '0.5';
  } else {
    document.querySelector('#menu-about').style.opacity = '1';
    document.querySelector('#menu-portfolio').style.opacity = '1';
    document.querySelector('#menu-contact').style.opacity = '1';
  }
}), { threshold: [0] });

observerAbout.observe(document.querySelector('#about-me'));

const observerContact = new IntersectionObserver(((entries) => {
  if (entries[0].isIntersecting > 0) {
    document.querySelector('#menu-contact').style.opacity = '0.5';
  } else {
    document.querySelector('#menu-contact').style.opacity = '1';
    document.querySelector('#menu-about').style.opacity = '1';
    document.querySelector('#menu-portfolio').style.opacity = '1';
  }
}), { threshold: [0] });

observerContact.observe(document.querySelector('#form'));

/* SCROLL TO TOP */
const myButton = document.getElementById('myBtn');
const mainSection = document.querySelector('#main-section');

mainSection.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20) {
    myButton.style.display = 'block';
  } else {
    myButton.style.display = 'none';
  }
});
// When the user scrolls down 20px from the top of the document, show the button

// When the user clicks on the button, scroll to the top of the document
myButton.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});