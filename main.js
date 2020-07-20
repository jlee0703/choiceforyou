"use strict";

const wrap = document.querySelector(".wrap");
const productImgs = document.querySelectorAll(".productImg");
let description = "";

wrap.addEventListener("mouseover", overWork);

function overWork(e) {
  if (e.target.parentNode.tagName !== "A") {
    return;
  } else {
    description = e.target.parentNode.parentNode.parentNode;
    description.children[1].children[0].style.display = "none";
    description.children[1].children[1].style.display = "block";
  }
}

wrap.addEventListener("mouseout", outWork);

function outWork(e) {
  if (e.target.parentNode.tagName !== "A") {
    return;
  } else {
    description.children[1].children[0].style.display = "block";
    description.children[1].children[1].style.display = "none";
  }
}

const topBtn = document.querySelector(".scroll_top");
topBtn.addEventListener("click", topWork);
let currentY = "";

function topWork(e) {
  currentY = window.pageYOffset;
  if (currentY > 1) {
    scrollTo(0, 0);
  } else {
    return;
  }
}

window.addEventListener("scroll", scrollWork);

function scrollWork() {
  if (window.pageYOffset > 10) {
    topBtn.classList.add("on");
    ham.classList.remove("open");
    navMenu.classList.remove("on");
  } else {
    topBtn.classList.remove("on");
  }
}

const hamBtn = document.querySelector(".ham_menu");
const navMenu = document.querySelector(".nav_menu");
let ham = "";

hamBtn.addEventListener("click", hamWork);

function hamWork(e) {
  if (e.target.tagName === "UL") {
    ham = e.target;
  } else {
    ham = e.target.parentNode;
  }

  if (!ham.classList.contains("open")) {
    ham.classList.add("open");
    navMenu.classList.add("on");
  } else {
    ham.classList.remove("open");
    navMenu.classList.remove("on");
  }
}
