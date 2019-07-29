"use strict";

const guess = document.querySelector("#user-number");
const btn = document.querySelector(".btn");
const outputText = document.querySelector(".text");
const intentNumber = document.querySelector(".intent-number");

const randonNumber = () => Math.ceil(Math.random() * 100);

const randonNumberGenerate = randonNumber();

const isValidNumber = number => {
  if (number >= 0 && number <= 100) {
    return true;
  }
};

const intentTimes = () =>
  (intentNumber.innerHTML = parseInt(intentNumber.innerHTML) + 1);

const messagerGenerate = () => {
  if (randonNumberGenerate === parseInt(guess.value)) {
    outputText.innerHTML = "¡HAS GANADO, CAMPEONA!";
  } else if (randonNumberGenerate > guess.value) {
    outputText.innerHTML = "demasiado bajo";
  } else {
    outputText.innerHTML = "demasiado alto";
  }
};

const helpGuess = () => {
  if (isValidNumber(guess.value)) {
    messagerGenerate();
    intentTimes();
  } else {
    outputText.innerHTML = "Escribe un número y dale a Prueba";
  }
};

btn.addEventListener("click", helpGuess);
