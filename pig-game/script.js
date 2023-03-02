'use strict';

//query selectors
const playerDiceScoresEle = document.querySelectorAll('.player-dice-score');
const playerOneTitleEle = document.getElementById('player-title-one');
const playerTwoTitleEle = document.getElementById('player-title-two');
const scoreTitlesEle = document.querySelectorAll('.score-title');
const playerScoreOneEle = document.getElementById('player-score-one');
const playerScoreTwoEle = document.getElementById('player-score-two');
const diceImageEle = document.querySelector('.dice-image');
const rollTheDiceButton = document.querySelector('.btn btn-roll-dice');
const gameSectionOne = document.getElementById('game-section-one');
const gameSectionTwo = document.getElementById('game-section-two');

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

// hide dice image on load
diceImageEle.classList.add('hidden');
