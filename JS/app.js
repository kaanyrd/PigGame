"use strict";

const closeBtn = document.querySelector("#close-btn");
const navBtn = document.querySelector("#nav-btn");
const navbar = document.querySelector("#navbar");

navBtn.addEventListener("click", () => {
  navbar.classList.remove("close-navbar");
});

closeBtn.addEventListener("click", () => {
  navbar.classList.add("close-navbar");
});
