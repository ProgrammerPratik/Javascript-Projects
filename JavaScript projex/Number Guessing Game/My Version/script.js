'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
let ultimateLooseMessage = 0;
console.log(randomNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const num = Number(document.querySelector('.guess').value);

  if (num === randomNumber) {
    displayMessage('🎉 Congrats!!! YOU WON! 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (!num) {
    displayMessage('pls enter a number');
  } else if (num !== randomNumber) {
    if (score > 1) {
      displayMessage(
        num > randomNumber ? '🔼 Number is too high' : '🔽 Number is too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🥴 you lost this round, better luck next time...');
      document.querySelector('body').style.backgroundColor = '#ff543d';
      document.querySelector('.message').style.color = 'black';
      ultimateLooseMessage++;
    }
    if (ultimateLooseMessage === 3) {
      document.querySelector('.title').textContent =
        '🤬🤬BRUH YOU SUCK AT THIS GAME, DONT PLAY AGAIN🤬🤬';
      displayMessage('$%#^%@#^%');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  document.querySelector('.score').textContent = score;
  displayMessage('start guessing...');
  document.querySelector('.title').textContent = 'Guess The Number:';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#cccccc';
  document.querySelector('.hint').textContent = '';
});

document.querySelector('.hintButton').addEventListener('click', function () {
  randomNumber > 10
    ? (document.querySelector('.hint').textContent =
        '🤫 number is greater then 10 🤫')
    : (document.querySelector('.hint').textContent =
        '🤫 number is less then 10 🤫');
});
