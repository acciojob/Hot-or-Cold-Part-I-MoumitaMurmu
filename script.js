//your code here
let inputGuess = document.querySelector("#guess");
let randomButton = document.querySelector("#btn");
let number = document.querySelector("#num");
let respond = document.querySelector("#respond");

randomButton.addEventListener("click", hotOrCold);
function hotOrCold() {
  let randomNum = randomNumber();
  let userNum = inputGuess.value;

  let difference = Math.abs(randomNum - userNum);

  if (difference == 0 || difference <= 2) {
    number.innerText = `${randomNum}`;
    respond.innerText = "Hot";
  } else {
    number.innerText = `${randomNum}`;
    respond.innerText = "Cold";
  }
}

const MIN_RANGE = -20;
const MAX_RANGE = 20;
function randomNumber() {
  // gives random number between -20 and 20
  return Math.floor(Math.random() * (MAX_RANGE - MIN_RANGE) + MIN_RANGE);
}
