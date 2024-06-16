console.log("Hello World!")
// Logic to get computer choice

// create a function name called getComputerChoice
function getComputerChoice() {

    // create a variable which store rock, paper, scissors.
    let choices = ["rock", "paper", "scissors"];

    // create a variable which will randomly select and STORE the data from previous variable.
    let randomChoice = Math.floor(Math.random() * choices.length);

    // DISPLAY the output of randomly chosen data
    // console.log(choices[randomChoice])
    return choices[randomChoice];
    }

function playGame() {
    // Logic to get human choice

// CREATE a function named getHumanChoice
function getHumanChoice() {

    // INPUT the choice of user and STORE it in a variable
    let userChoice = prompt("Enter rock paper or scissors").toLowerCase();
    
    // IF the answer == "rock" || "paper" || "scissors" THEN
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors" ) {
    // DISPLAY answer
    return userChoice
    }
    // ELSE
    else {
    // DISPLAY "ERROR"
    return null;
        }
    }

// Creating two variables to keep track of humanScore and computerScore

let humanScore = 0;

let computerScore = 0;

// Write a logic to play single round

// CREATE a function to playRounds with two parameters humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {

    // CHECKING if they are equal
    if (humanChoice === computerChoice) {
        console.log(`It's a TIE! You both selected ${humanChoice}`)
        console.log(`human score: ${humanScore} AND computer score: ${computerScore}`);
    // Comparing if human choice beats computer choice
    } else if (
        (humanChoice === "rock" && computerChoice == "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(`${humanChoice} beats ${computerChoice}`);
            humanScore++;
            console.log(`human score: ${humanScore} AND computer score: ${computerScore}`);
    // Comparing if computer choice beats human choice
    } else if (
        (computerChoice === "rock" && humanChoice == "scissors") || 
        (computerChoice === "paper" && humanChoice === "rock") || 
        (computerChoice === "scissors" && humanChoice === "paper")){
            console.log(`${computerChoice} beats ${humanChoice}`);
            computerScore++;
            console.log(`human score: ${humanScore} AND computer score: ${computerScore}`);
    // IF non of the conditions satisifies it will throw an ERROR message
    } else {
            console.log("ERROR!")
    }

}
// INITILIZATION i = 0
// for(i < 5) THEN
// OUTPUT computerSelection, humanSelection and result variable starts untill the loop runs for 5 times
for (i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    result = playRound(computerSelection, humanSelection);
}

// IF humanScore equals computerScore at the end of 5 rounds THEN
//  OUTPUT It's a tie
if (humanScore === computerScore) {
    console.log("It's a tie Game");
// ELSE IF humanScore is greater then computerScore THEN
// OUTPUT user won the game
} else if (humanScore > computerScore) {
     console.log("User won the game");
// ELSE IF computerScore is greater then humanScore THEN
// OUTPUT computer won the game
} else {
    console.log("computer won the game");
}
}

playGame()