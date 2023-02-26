'use strict';

const operators = document.querySelectorAll('.operators');
const decimals = document.querySelector('.decimals');
const equals = document.querySelector('.equals');
const allClear = document.querySelector('.allClear');
const clear = document.querySelector('.clear');
const displayInput = document.getElementById('inputArea');
const displayResult = document.getElementById('resultArea');

let result = 0;

function refreshDisplay() {
  displayResult.textContent = result;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
  }

  refreshDisplay();
}

operate('multiply', 5, 4);
