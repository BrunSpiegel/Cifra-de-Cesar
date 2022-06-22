const $inputNumber = document.getElementById("input-number");
const $inputText = document.querySelector(".input-text");
const $button = document.querySelector(".button");
const $paragraph = document.querySelector(".paragraph");
const $resetText = document.querySelector(".reset-text");

const alphabet = "abcdefghijklmnopqrstuvwxyz";

let cryptography = [];
let number = "";
let text = "";

function encryptedText() {
  [...text].forEach((letter) => {
    [...alphabet].forEach((item, index) => {
      if (item === letter) {
        cryptography.push(alphabet[index + number % alphabet.length]);
      }
    });
  });
}

const printText = () => {
  $paragraph.textContent = cryptography;
};

const cryptographyReset = () => {
  cryptography = [];
};

$inputText.addEventListener("change", (e) => {
  const words = e.target
  text = words.value;
});

$inputNumber.addEventListener("change", (e) => {
  const numbers = e.target
  number = parseInt(numbers.value);
});

$button.addEventListener("click", () => {
  encryptedText();
  printText();
});

$resetText.addEventListener("click", () => {
  cryptographyReset();
  $paragraph.textContent = "";
});
