'use strict';

const toggleFunc = (elem) => {
  elem.classList.toggle("active");
}

const denyScroll = (elem) => {
  elem.classList.toggle("deny-scroll");
}

const mobileMenu = document.querySelector(".mobile-menu");
const accordion = document.querySelector(".accordion");
const overlay = document.querySelector(".overlay");
const faqItems = document.querySelectorAll(".faq-list__item");
const body = document.querySelector("body");

mobileMenu.addEventListener("click", function() {
  toggleFunc(accordion);
  toggleFunc(mobileMenu);
  toggleFunc(overlay);
  denyScroll(body);
});

faqItems.forEach(o => {
  o.addEventListener("click", function() {
    toggleFunc(o);
  });
});