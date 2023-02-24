"use strict";
// NAVBAR
const closeBtn = document.querySelector("#close-btn");
const navBtn = document.querySelector("#nav-btn");
const navbar = document.querySelector("#navbar");

navBtn.addEventListener("click", () => {
  navbar.classList.remove("close-navbar");
});

closeBtn.addEventListener("click", () => {
  navbar.classList.add("close-navbar");
});
// END OF NAVBAR
// GAME
const diceEl = document.querySelector(".dice");
let player1Score = document.querySelector(".player-1-score");
let player2Score = document.querySelector(".player-2-score");
let player1Current = document.querySelector(".player-1-current");
let player2Current = document.querySelector(".player-2-current");
const newBtn = document.querySelector("#new-btn");
const holdBtn = document.querySelector("#hold-btn");
const rollBtn = document.querySelector("#roll-btn");

diceEl.style.opacity = "0";
player1Score.textContent = 0;
player2Score.textContent = 0;
player1Current.textContent = 0;
player2Current.textContent = 0;

diceEl.style.transition = "all .1s ease-in-out";
rollBtn.addEventListener("click", () => {
  let dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `/IMGs/dice-${dice}.png`;
  diceEl.style.opacity = "1";
  console.log(dice);
});
// END OF GAME
