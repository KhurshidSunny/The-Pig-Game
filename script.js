'use strict';

const currentZero = document.getElementById('current--0');
const currentOne = document.getElementById('current--1');
const scoreZero = document.getElementById('score--0');
const scoreOne = document.getElementById('score--1');
const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');
const btnHold = document.querySelector('.btn--hold');

const diceEl = document.querySelector('.dice');
let currentScore = 0;
scoreZero.textContent = 0;
scoreOne.textContent = 0;
let activePlayer = 0;
let scores = [0, 0];
diceEl.classList.add('hidden');

const rollBtn = document.querySelector('.btn--roll');
rollBtn.addEventListener('click', function () {
  // create random number for dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // display the dice back
  diceEl.classList.remove('hidden');

  // roll the dice to show number from 1 to 6
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;
    playerZero.classList.toggle('player--active');
    playerOne.classList.toggle('player--active');
  }
});

// hold the score
btnHold.addEventListener('click', function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZero.classList.toggle('player--active');
  playerOne.classList.toggle('player--active');

  scoreZero.textContent = currentScore;
  currentScore = 0;
  currentZero.textContent = 0;
});
