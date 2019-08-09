/* eslint-disable quotes */
"use strict";

const guess = document.querySelector("#user-number");
const btn = document.querySelector(".btn");
const outputText = document.querySelector(".text");
const intentNumber = document.querySelector(".intent-number");

const randonNumber = () => Math.ceil(Math.random() * 100);

const randonNumberGenerate = randonNumber();
console.log(randonNumberGenerate);
const isValidNumber = number => {
  if (number >= 0 && number <= 100) {
    return true;
  }
};

const printText = (element, text) => {
  element.innerHTML = text;
};

let intents = 0;
const intentTimes = () =>{
  intents++;
  printText(intentNumber, intents);
};


const messagerGenerate = () => {
  if (randonNumberGenerate === parseInt(guess.value)) {
    printText(outputText, "¡HAS GANADO, CAMPEONA!");
  } else if (randonNumberGenerate > parseInt(guess.value)) {
    printText(outputText, "demasiado bajo");
  } else {
    printText(outputText, "demasiado alto");
  }
};

const helpGuess = () => {
  if (isValidNumber(parseInt(guess.value))) {
    messagerGenerate();
    intentTimes();
  } else {
    printText(outputText, "Escribe un número y dale a Prueba");
  }
};

btn.addEventListener("click", helpGuess);
