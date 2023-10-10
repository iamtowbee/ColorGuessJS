var cards = document.querySelectorAll(".card");
var p = document.querySelector("p");

// Declare colors 
var correctColor = Math.floor(Math.random() * 9);
var colorArr = [];

const createColor = () => {
  return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
}

// Set grid colors and correct value
for (let i = 0; i < 9; i++) {
  colorArr.push(createColor());
}
p.textContent = `rgb(${colorArr[correctColor]})`;


for (let i = 0; i < cards.length; i++)
{
  cards[i].style.backgroundColor = `rgb(${colorArr[i]})`;
}

const checkAnswer = (cardIndex) => {
  if (cardIndex == correctColor) {
    alert("Correct answer!");
  } else {
    alert("Wrong answer! Try again.");
  }
}

