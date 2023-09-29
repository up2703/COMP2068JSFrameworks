// Import the 'prompt' npm package

const prompt = require('prompt');

function getRandom() {
    const randomValue = Math.random();
    if (randomValue <= 0.34) {
        return 'PAPER';
    } else if (randomValue <= 0.67) {
        return 'SCISSORS';
    } else {
        return 'ROCK';
    }
}

function whoIsTheWinner(userSelectionOne, computerSelection) {

    if (userSelectionOne === computerSelection) {
        return "It's a tie";
    } else if (
        (userSelectionOne === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelectionOne === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelectionOne === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        return 'User';
    } else {
        return 'Computer';
    }
}

prompt.start();

console.log(" \n Please Select any one option \n 1.Rock \n 2.Paper \n 3.Scissors \n")

prompt.get(['userSelectionOne'], function (err, result) {

    if (err) {
        console.error(err);
        return;
    }

    const userSelectionOne = result.userSelectionOne.toUpperCase();
    const computerSelection = getRandom();

    console.log('User selected: ' + userSelectionOne +"\n");
    console.log('Computer selected: ' + computerSelection +"\n");

    const resultMessage = whoIsTheWinner(userSelectionOne, computerSelection);
    console.log("Hurray! "+ resultMessage+" Wins");

});