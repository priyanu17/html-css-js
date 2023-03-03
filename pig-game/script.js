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

//setting player titles
playerOneTitleEle.textContent = 'Player 1';
playerTwoTitleEle.textContent = 'Player 2';

//setting current title
scoreTitlesEle.forEach((scoreTitle) => {
  scoreTitle.textContent = 'CURRENT';
});

// game state variables
let activePlayer, currentScore, playerScores, playing;

function initializeGameParams() {
  activePlayer = 0;
  currentScore = 0;
  playerScores = [0, 0];
  playing = true;

  //make player one as active
  // hide dice image on load
  diceImageEle.classList.add('hidden');
  gameSectionOne.classList.add('active');

  //setting up current score
  playerScoreOneEle.textContent = '0';
  playerScoreTwoEle.textContent = '0';

  // setting player scores to 0
  playerDiceScoresEle.forEach((scoreElement) => {
    scoreElement.textContent = '0';
  });

  document
    .getElementById(`game-section-${activePlayer + 1}`)
    .classList.remove('game-winner');
  gameSectionTwo.classList.remove('active');
}

initializeGameParams();

function switchPlayer() {
  if (!playing) {
    return;
  }
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

rollTheDiceButton.addEventListener('click', function () {
  if (!playing) {
    return;
  }

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
    switchPlayer();
  }
});

holdButton.addEventListener('click', function () {
  if (!playing) {
    return;
  }
  // add current score to total score
  playerScores[activePlayer] += currentScore;
  document.getElementById(`player-dice-score-${activePlayer + 1}`).textContent =
    playerScores[activePlayer];

  if (playerScores[activePlayer] < 100) {
    switchPlayer();
  } else {
    // active Player wins the game
    document
      .getElementById(`game-section-${activePlayer + 1}`)
      .classList.add('game-winner');
    diceImageEle.classList.add('hidden');

    playing = false; // disable other buttons
  }
});

newGameButton.addEventListener('click', initializeGameParams);
