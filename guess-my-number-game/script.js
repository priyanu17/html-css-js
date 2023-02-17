'use-strict';

// number will be b/n 1 to 20
const targetNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

// Event handler for check button click
document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(document.querySelector('.user-input').value);

  // TODO : remove this line
  document.querySelector('.current-input').textContent = targetNumber;
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
  } else if (userGuess > targetNumber) {
    // when user guesses a larger number

    if (score > 0) {
      document.querySelector('.conclude-message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (score === 0) {
      document.querySelector('.conclude-message').textContent =
        'You Lost the game!';
    }
  } else if (userGuess < targetNumber) {
    // when user guesses a smaller number

    if (score > 0) {
      document.querySelector('.conclude-message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (score === 0) {
      document.querySelector('.conclude-message').textContent =
        'You Lost the game!';
    }
  }
});
