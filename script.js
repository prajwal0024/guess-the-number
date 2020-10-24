'use strict';
let number = 0;
let score = 20;
let highScore = 0;

const generateRandomNumber = function () {
  number = Math.trunc(Math.random() * 20) + 1;
};

const displayText = function (type, text) {
  document.querySelector(`.${type}`).textContent = text;
};

generateRandomNumber();

document.querySelector('.again').addEventListener('click', function () {
  displayText('message', 'Start guessing..');
  // Reset Score
  score = 20;
  displayText('score', score);
  // Clear the Input and Hide the number
  document.querySelector('.guess').value = '';
  displayText('number', '?');
  // Reset Styling
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // Generate New Number
  generateRandomNumber();
});

document.querySelector(`.check`).addEventListener('click', function () {
  // Taking input
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayText('message', '⛔️ No Number');
  } else if (guess === number) {
    // IF Won
    displayText('message', '🎉 Correct Number');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      displayText('highscore', highScore);
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayText('message', guess < number ? '📉 Too Low' : '📈 Too High');
      score--;
      displayText('score', score);
    } else {
      // If Lost
      displayText('message', '😂 You lost the game!');
      displayText('score', '0');
    }
  }
});
