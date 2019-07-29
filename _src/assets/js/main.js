"use strict";

const guess = document.querySelector("#user-number");
const btn = document.querySelector(".btn");
const outputText = document.querySelector(".text");
const intentNumber = document.querySelector(".intent-number");
let times = 0;

const randonNumber = () => Math.ceil(Math.random() * 100);

const randonNumberGenerate = randonNumber();
console.log(randonNumberGenerate);

const intentTimes = () => (intentNumber.innerHTML = times);

const helpGuess = () => {
  if (randonNumberGenerate == guess.value) {
    outputText.innerHTML = "¡HAS GANADO, CAMPEONA!";
  } else if (randonNumberGenerate > guess.value) {
    outputText.innerHTML = "demasiado bajo";
  } else {
    outputText.innerHTML = "demasiado alto";
  }
  times += 1;
  intentTimes();
  console.log(times);
};

btn.addEventListener("click", helpGuess);
