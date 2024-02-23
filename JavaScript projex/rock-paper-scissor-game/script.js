'use strict';
let userPoint = 0;
let botPoint = 0;
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let userNumber = 0;
let botRandomNumber = 0;

const botChoiceRandomizer = function () {
  botRandomNumber = Math.trunc(Math.random() * 3) + 1;
  if (botRandomNumber === 1) {
    document.querySelector('.itemSelectedB').src = 'assets/rock.png';
  } else if (botRandomNumber === 2) {
    document.querySelector('.itemSelectedB').src = 'assets/paper.png';
  } else if (botRandomNumber === 3) {
    document.querySelector('.itemSelectedB').src = 'assets/scissor.png';
  }
};

const winner = function (userVal, botVal) {
  let winner;
  if (userVal === 1 && botVal === 1) {
    winner = 3;
  } else if (userVal === 1 && botVal === 2) {
    winner = 2;
  } else if (userVal === 1 && botVal === 3) {
    winner = 1;
  } else if (userVal === 2 && botVal === 1) {
    winner = 1;
  } else if (userVal === 2 && botVal === 2) {
    winner = 3;
  } else if (userVal === 2 && botVal === 3) {
    winner = 2;
  } else if (userVal === 3 && botVal === 1) {
    winner = 2;
  } else if (userVal === 3 && botVal === 2) {
    winner = 1;
  } else if (userVal === 3 && botVal === 3) {
    winner = 3;
  }
  //   return userPoint > botPoint ? userPoint : botPoint;
  return winner;
};

console.log(botRandomNumber);

rock.addEventListener('click', () => {
  document.querySelector('.itemSelected').src = 'assets/rock.png';
  userNumber = 1;
  botChoiceRandomizer();
  let win = winner(userNumber, botRandomNumber);
  if (win === 3) {
    document.querySelector('.won').textContent = 'Draw';
    document.querySelector('.won').style.color = 'purple';
  } else if (win === 1) {
    document.querySelector('.won').textContent = 'You won!';
    document.querySelector('.won').style.color = 'green';
    userPoint++;
    document.querySelector('.humanPoints').textContent = userPoint;
  } else if (win === 2) {
    document.querySelector('.won').textContent = 'Computer won!';
    document.querySelector('.won').style.color = 'red';
    botPoint++;
    document.querySelector('.botPoints').textContent = botPoint;
  }
  if (userPoint >= 10) {
    document.querySelector('body ').style.backgroundColor = 'green';
    document.querySelector('body ').style.color = 'black';
  } else if (botPoint >= 10) {
    document.querySelector('body ').style.backgroundColor = 'red';
    document.querySelector('body ').style.color = 'black';
  }
});

paper.addEventListener('click', () => {
  document.querySelector('.itemSelected').src = 'assets/paper.png';
  userNumber = 2;
  botChoiceRandomizer();
  let win = winner(userNumber, botRandomNumber);
  if (win === 3) {
    document.querySelector('.won').textContent = 'Draw';
    document.querySelector('.won').style.color = 'purple';
  } else if (win === 1) {
    document.querySelector('.won').textContent = 'You won!';
    document.querySelector('.won').style.color = 'green';
    userPoint++;
    document.querySelector('.humanPoints').textContent = userPoint;
  } else if (win === 2) {
    document.querySelector('.won').textContent = 'Computer won!';
    document.querySelector('.won').style.color = 'red';
    botPoint++;
    document.querySelector('.botPoints').textContent = botPoint;
  }
  if (userPoint >= 10) {
    document.querySelector('body ').style.backgroundColor = 'green';
    document.querySelector('body ').style.color = 'black';
  } else if (botPoint >= 10) {
    document.querySelector('body ').style.backgroundColor = '#e45745';
    document.querySelector('body ').style.color = 'black';
  }
});

scissor.addEventListener('click', () => {
  document.querySelector('.itemSelected').src = 'assets/scissor.png';
  userNumber = 3;
  botChoiceRandomizer();
  let win = winner(userNumber, botRandomNumber);
  if (win === 3) {
    document.querySelector('.won').textContent = 'Draw';
    document.querySelector('.won').style.color = 'purple';
  } else if (win === 1) {
    document.querySelector('.won').textContent = 'You won!';
    document.querySelector('.won').style.color = 'green';
    userPoint++;
    document.querySelector('.humanPoints').textContent = userPoint;
  } else if (win === 2) {
    document.querySelector('.won').textContent = 'Computer won!';
    document.querySelector('.won').style.color = '#e45745';
    botPoint++;
    document.querySelector('.botPoints').textContent = botPoint;
  }
  if (userPoint >= 10) {
    document.querySelector('body ').style.backgroundColor = 'green';
    document.querySelector('body ').style.color = 'black';
  } else if (botPoint >= 10) {
    document.querySelector('body ').style.backgroundColor = '#e45745';
    document.querySelector('body ').style.color = 'black';
  }
});
