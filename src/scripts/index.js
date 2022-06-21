const $inputNumber = document.getElementById("input-number");
const $inputText = document.querySelector(".input-text");
const $button = document.querySelector(".button");
const $paragraph = document.querySelector(".paragraph");
const $resetText = document.querySelector(".reset-text");

const alphabet = "abcdefghijklmnopqrstuvwxyz";

let cryptography = [];
let number = "";
let text = "";

const encryptedText = () => {
  [...text].forEach((letter) => {
    [...alphabet].forEach((item, index) => {
      if (item == letter) {
        cryptography.push(alphabet[index + number % alphabet.length]);
      }
    });
  });
};

const printText = () => {
  $paragraph.textContent = cryptography;
};

const cryptographyReset = () => {
  cryptography = [];
};

$inputText.addEventListener("change", (words) => {
  text = words.target.value;
});

$inputNumber.addEventListener("change", (numbers) => {
  number = parseInt(numbers.target.value);
});

$button.addEventListener("click", () => {
  encryptedText();
  printText();
});

$resetText.addEventListener("click", () => {
  cryptographyReset();
  $paragraph.textContent = "";
});
