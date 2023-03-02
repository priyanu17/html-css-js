'use strict';

//query selectors
const playerDiceScoresEle = document.querySelectorAll('.player-dice-score');
const playerOneTitleEle = document.getElementById('player-title-one');
const playerTwoTitleEle = document.getElementById('player-title-two');
const scoreTitlesEle = document.querySelectorAll('.score-title');
const playerScoreOneEle = document.getElementById('player-score-1');
const playerScoreTwoEle = document.getElementById('player-score-2');
const diceImageEle = document.querySelector('.dice-image');
const rollTheDiceButton = document.querySelector('.btn-roll-dice');
const newGameButton = document.querySelector('.btn-new-game');
const holdButton = document.querySelector('.btn-hold');
const gameSectionOne = document.getElementById('game-section-1');
const gameSectionTwo = document.getElementById('game-section-2');

// setting player scores to 0
playerDiceScoresEle.forEach((scoreElement) => {
  scoreElement.textContent = '0';
});

//setting player titles
playerOneTitleEle.textContent = 'Player 1';
playerTwoTitleEle.textContent = 'Player 2';

//setting current title
scoreTitlesEle.forEach((scoreTitle) => {
  scoreTitle.textContent = 'CURRENT';
});

//setting up current score
playerScoreOneEle.textContent = '0';
playerScoreTwoEle.textContent = '0';

//make player one as active
// hide dice image on load
diceImageEle.classList.add('hidden');
gameSectionOne.classList.add('active');

// current score variable

let activePlayer = 0;
let currentScore = 0;
let playerScores = [0, 0];

rollTheDiceButton.addEventListener('click', function () {
  // roll the dice, make current player as active
  const dice = Math.trunc(Math.random() * 6) + 1;
  //display the dice
  diceImageEle.src = `./imgs/dice-${dice}.png`;
  diceImageEle.classList.remove('hidden');

  //check for one

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`player-score-${activePlayer + 1}`).textContent =
      currentScore;
  } else {
    document.getElementById(`player-score-${activePlayer + 1}`).textContent = 0;
    document
      .getElementById(`game-section-${activePlayer + 1}`)
      .classList.remove('active');

    activePlayer = activePlayer === 1 ? 0 : 1;
    currentScore = 0;
    document
      .getElementById(`game-section-${activePlayer + 1}`)
      .classList.add('active');
  }
});
