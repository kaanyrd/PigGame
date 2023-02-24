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
const player1Score = document.querySelector(".player-1-score");
const player2Score = document.querySelector(".player-2-score");
const newBtn = document.querySelector("#new-btn");
const holdBtn = document.querySelector("#hold-btn");
const rollBtn = document.querySelector("#roll-btn");

diceEl.classList.add("hidden");
player1Score.textContent = 0;
player2Score.textContent = 0;

rollBtn.addEventListener("click", () => {
  let dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `/IMGs/dice-${dice}.png`;
  diceEl.classList.remove("hidden");
  console.log(dice);
});
// END OF GAME
