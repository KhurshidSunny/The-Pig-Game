'use strict';

const currentZero = document.getElementById('current--0');
const currentOne = document.getElementById('current--1');
const scoreZero = document.getElementById('score--0');
const scoreOne = document.getElementById('score--1');
const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');
const btnHold = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');

const diceEl = document.querySelector('.dice');
let currentScore = 0;
scoreZero.textContent = 0;
scoreOne.textContent = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;
diceEl.classList.add('hidden');

const switchControl = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZero.classList.toggle('player--active');
  playerOne.classList.toggle('player--active');
};

rollBtn.addEventListener('click', function () {
  if (playing) {
    // create random number for dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    // display the dice back
    diceEl.classList.remove('hidden');

    // roll the dice to show number from 1 to 6
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchControl();
    }
  }
});

// hold the score
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('active--player');
      playing = false;
      diceEl.classList.add('hidden');
    } else {
      switchControl();
    }
  }
});
