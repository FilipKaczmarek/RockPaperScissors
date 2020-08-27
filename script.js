const mainBtn = document.querySelector('.btn-play');
const choiceBox = document.querySelector('.rockpaperscisorss');
const playerChoiceBox = document.querySelector('.player-choice__box');
const computerChoiceBox = document.querySelector('.computer-choice__box');
let buttons = document.getElementsByClassName('game-choice__button');

const ROCK = document.querySelector('.btn-rock');
const PAPER = document.querySelector('.btn-paper');
const SCISSORS = document.querySelector('.btn-scissors');

mainBtn.addEventListener('click', () => {
    choiceBox.style.display = "block";
});

ROCK.addEventListener('click', () => {
    choiceBox.style.display = "none";

    playerChoiceBox.style.backgroundImage = "url('Images/rockimg.png')";
    randomComputerChoice();
});

PAPER.addEventListener('click', () => {
    choiceBox.style.display = "none";

    playerChoiceBox.style.backgroundImage = "url('Images/paperimg.png')";
    randomComputerChoice();
});

SCISSORS.addEventListener('click', () => {
    choiceBox.style.display = "none";

    playerChoiceBox.style.backgroundImage = "url('Images/scissorsimg.png')";
    randomComputerChoice();
});

let randomNumber;
function randomComputerChoice() {
    randomNumber = Math.random();
    // 0 - 0.34 ROCK
    // 0.35 - 0,67 PAPER
    // 0.68 - 1 SCISSORS

    if (randomNumber <= 0.34) {
        computerChoiceBox.style.backgroundImage = "url('Images/rockimg.png')";
    } else if (randomNumber >= 0.35 && randomNumber <= 0.67) {
        computerChoiceBox.style.backgroundImage = "url('Images/paperimg.png')";
    } else if (randomNumber >= 0.68) {
        computerChoiceBox.style.backgroundImage = "url('Images/scissorsimg.png')";
    }
}

let informationWhoWon = document.querySelector('.whoWins');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        console.log("Clicked index: " + i);

        if (i == 0 && randomNumber <= 0.34 ||
            i == 1 && randomNumber >= 0.35 && randomNumber <= 0.67 ||
            i == 2 && randomNumber >= 0.68) {
            informationWhoWon.innerHTML = "It's a DRAW!"
        } else if (i == 0 && randomNumber >= 0.68 ||
            i == 1 && randomNumber <= 0.34 ||
            i == 2 && randomNumber >= 0.35 && randomNumber <= 0.67) {
            informationWhoWon.innerHTML = "You won!"
        } else if ( i == 0 && randomNumber >= 0.35 && randomNumber <= 0.67 ||
            i == 1 && randomNumber >= 0.68 ||
            i == 2 && randomNumber <= 0.34) {
                informationWhoWon.innerHTML = "You lost!" 
            }
    })
};
