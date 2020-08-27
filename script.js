const mainBtn = document.querySelector('.btn-play');
const choiceBox = document.querySelector('.rockpaperscisorss');
const playerChoiceBox = document.querySelector('.player-choice__box');
const computerChoiceBox = document.querySelector('.computer-choice__box');

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

function randomComputerChoice(){
    let randomNumber = Math.random();
    // 0 - 0.34 ROCK
    // 0.35 - 0,67 PAPER
    // 0.68 - 1 SCISSORS

    if(randomNumber <= 0.34){
        computerChoiceBox.style.backgroundImage = "url('Images/rockimg.png')";
    } else if (randomNumber >= 0.35 && randomNumber <= 0,67){
        computerChoiceBox.style.backgroundImage = "url('Images/paperimg.png')";
    } else if (randomNumber >= 0,68) {
        computerChoiceBox.style.backgroundImage = "url('Images/scissorsimg.png')";
    }
}



