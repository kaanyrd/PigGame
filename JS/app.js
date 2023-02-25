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
let player1Score = document.querySelector(".player-0-score");
let player2Score = document.querySelector(".player-1-score");
let player1Current = document.querySelector(".player-0-current");
let player2Current = document.querySelector(".player-1-current");
let card1 = document.querySelector(".player-0");
let card2 = document.querySelector(".player-1");
const newBtn = document.querySelector("#new-btn");
const holdBtn = document.querySelector("#hold-btn");
const rollBtn = document.querySelector("#roll-btn");

let activePlayer, scores, currentPoint, playing;

let switchPlayer = () => {
  currentPoint = 0;
  // scores[activePlayer] = 0;
  document.querySelector(`.player-${activePlayer}-current`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  card1.classList.toggle("active-player");
  card2.classList.toggle("active-player");
};
let init = () => {
  diceEl.style.opacity = "0";
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1Current.textContent = 0;
  player2Current.textContent = 0;
  activePlayer = 0;
  scores = [0, 0];
  currentPoint = 0;
  playing = true;
  document.querySelector(`.player-0`).classList.remove("winner");
  document.querySelector(`.player-1`).classList.remove("winner");
  document.querySelector(`.player-1`).classList.remove("active-player");
  document.querySelector(`.player-0`).classList.add("active-player");
};
init();
rollBtn.addEventListener("click", () => {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.style.opacity = "1";
    diceEl.src = `/IMGs/dice-${dice}.png`;

    if (dice !== 1) {
      currentPoint = dice + currentPoint;
      document.querySelector(`.player-${activePlayer}-current`).textContent =
        currentPoint;
    } else {
      switchPlayer();
    }
  }
});
holdBtn.addEventListener("click", () => {
  if (playing) {
    scores[activePlayer] = currentPoint + scores[activePlayer];
    document.querySelector(`.player-${activePlayer}-score`).textContent =
      scores[activePlayer];
  }
  // document.querySelector(`.player-${activePlayer}-current`).textContent = 0;
  if (scores[activePlayer] >= 20) {
    playing = false;
    document.querySelector(`.player-${activePlayer}`).classList.add("winner");
    document
      .querySelector(`.player-${activePlayer}`)
      .classList.remove("active-player");
  } else {
    switchPlayer();
  }
});

newBtn.addEventListener("click", init);
// END OF GAME
