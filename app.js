'use strict';

// DOM Elements
const numbers = document.querySelectorAll('.digits');
const operators = document.querySelectorAll('.operators');
const decimals = document.querySelector('.decimals');
const equals = document.querySelector('.equals');
const allClear = document.querySelector('.allClear');
const clear = document.querySelector('.clear');
const displayInput = document.querySelector('#inputArea');
const displayResult = document.querySelector('#resultArea');

// Variables
let result = undefined;
let firstNum = '';
let secondNum = '';
let currentOperator;
let operatorIsSet = false;

// Events
decimals.onclick = () => setPoint();
equals.onclick = () => operate(firstNum, currentOperator, secondNum);
allClear.onclick = () => resetCalc();
clear.onclick = () => removeCharacters();

numbers.forEach((e) =>
  e.addEventListener('click', () => getNumbers(e.innerText))
);

operators.forEach((e) =>
  e.addEventListener('click', () => setOperator(e.innerText))
);

// Functions
function operate(num1, operator, num2) {
  if (operator === '×') {
    operator = '*';
  }
  if (operator === '÷') {
    operator = '/';
  }

  switch (operator) {
    case '+':
      result = num1 + num2;
      console.log('result: ', result);
      break;
    case '-':
      result = num1 - num2;
      console.log('result: ', result);
      break;
    case '*':
      result = num1 * num2;

      console.log('result: ', result);
      break;
    case '/':
      result = num1 / num2;
      console.log('result: ', result);
      break;
  }

  // result = result.replace('.', ',');

  // result = result.toFixed(9); // Einstellung Nachkommastellen

  refreshResult();
}

function getNumbers(num) {
  if (operatorIsSet === true) {
    secondNum += num;
    secondNum = parseFloat(secondNum);
    console.log('secondNum:', secondNum);
  } else {
    firstNum += num;
    firstNum = parseFloat(firstNum);
    console.log('firstNum:', firstNum);
  }
  refreshInputScreen();
}

function setOperator(operator) {
  if (result === undefined) {
    currentOperator = operator;
    operatorIsSet = true;
    console.log('operator:', currentOperator);
    refreshInputScreen();
  } else {
    currentOperator = operator;
    firstNum = result;
    secondNum = '';
    refreshInputScreen();
  }
}

function setPoint() {
  if (operatorIsSet === true) {
    secondNum += '.';
  } else {
    firstNum += '.';
  }
  refreshInputScreen();
}

function refreshInputScreen() {
  displayInput.textContent = firstNum;
  console.log('after firstNum:', displayInput.textContent);
  if (operatorIsSet === true) {
    displayInput.textContent += currentOperator;
    displayInput.textContent += secondNum;
    console.log('after secondNum:', displayInput.textContent);
  }
}

function refreshResult() {
  displayResult.textContent = result;
}

function resetCalc() {
  result = undefined;
  firstNum = '';
  secondNum = '';
  currentOperator;
  operatorIsSet = false;

  refreshInputScreen();
  refreshResult();
}

function removeCharacters() {
  let inputValue = displayInput.textContent;
  inputValue.slice(0, inputValue.length - 1);
  // refreshInputScreen();
}

// console.log('Hello World');
