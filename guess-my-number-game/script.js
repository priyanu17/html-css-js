'use-strict';

let targetNumber;
function resetTargetNumber() {
  // number will be b/n 1 to 20
  targetNumber = Math.trunc(Math.random() * 20) + 1;
}

resetTargetNumber();

let score = 20;
let highScore = 0;

function runOnIncorrectGuess(message) {
  if (score > 0) {
    document.querySelector('.conclude-message').textContent = message;
    score--;
    document.querySelector('.score').textContent = score;
  }
  if (score === 0) {
    document.querySelector('.conclude-message').textContent =
      'You Lost the game!';
  }
}

// Event handler for check button click
document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(document.querySelector('.user-input').value);

  if (!userGuess) {
    // if there is no user guess
    document.querySelector('.conclude-message').textContent =
      'Please enter valid input!';
  } else if (userGuess === targetNumber) {
    // when user guesses the correct input
    document.querySelector('.conclude-message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.current-input').style.backgroundColor = '#302ad6';
    document.querySelector('.current-input').style.width = '50%';
    document.querySelector('.current-input').textContent = targetNumber;
    document.querySelector('.user-input').style.backgroundColor = '#60b347';
    if (score > highScore) {
      // update high score only when new score is greater than high score
      highScore = score;
      document.querySelector('.high-score').textContent = highScore;
    }
  } else if (userGuess > targetNumber) {
    // when user guesses a larger number
    runOnIncorrectGuess('Too High!');
  } else if (userGuess < targetNumber) {
    // when user guesses a smaller number
    runOnIncorrectGuess('Too Low!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('Again button clicked');
  resetTargetNumber();
  score = 20;
  // reset display input
  document.querySelector('.conclude-message').textContent = 'Start your game!';
  document.querySelector('.current-input').textContent = '?';
  document.querySelector('.user-input').value = '';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = 'rgb(44, 41, 41)';
  document.querySelector('.current-input').style.backgroundColor =
    'rgb(93, 45, 45);';
  document.querySelector('.current-input').style.width = '30%';
  document.querySelector('.user-input').style.backgroundColor =
    'rgb(44, 41, 41)';
  document.querySelector('.current-input').style.backgroundColor =
    'rgb(44, 41, 41)';
});
