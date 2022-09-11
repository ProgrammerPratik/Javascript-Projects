'use strict';
/*

// querySelecter is used for selecting an element
// ".textContent" shows the content of the element
console.log(document.querySelector('.message').textContent);

// what is DOM:
// DOM: DOCUMENT OBJECT MODEL is a structured representation of HTML documents
// DOM allows JavaScript to access and interact with HTML elements

// DOM methods are not part of javascript, they are part of web APIs



// changing the element's content:
document.querySelector('.message').textContent = 'you won!! 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 19;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 10;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const num = Number(document.querySelector('.guess').value);

  // When player wins:
  if (num === secretNumber) {
    // document.querySelector('.message').textContent =
    //   '🤩hehe you guessed the number 🎉🎉';
    displayMessage('🤩hehe you guessed the number 🎉🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = '🎉' + secretNumber + '🎉';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When there's no input
  } else if (!num) {
    // document.querySelector('.message').textContent = '⛔ pls enter a number';
    displayMessage('⛔ pls enter a number');
  } else if (num !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   num > secretNumber
      //     ? '🔼 Your Guess is too high'
      //     : ' 🔽 Your Guess is too Low';
      displayMessage(
        num > secretNumber
          ? '🔼 Your Guess is too high'
          : ' 🔽 Your Guess is too Low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   '💥 you lost this round, try again...';
      displayMessage('💥 you lost this round, try again...');
      document.querySelector('body').style.backgroundColor = '#ff543d';
    }
  }
  // If the guess is Greater
  // } else if (num > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       '🔼 Your Guess is too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💥 you lost this round, try again...';
  //     document.querySelector('body').style.backgroundColor = '#ff543d';
  //   }

  //   // If the guess is smaller
  // } else if (num < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       ' 🔽 Your Guess is too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💥 you lost this round, try again...';
  //     document.querySelector('body').style.backgroundColor = '#ff543d';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // console.log('again clicked');
});
