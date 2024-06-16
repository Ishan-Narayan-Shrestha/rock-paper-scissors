console.log("Hello World!")

// Logic to get computer choice

// create a function name called getComputerChoice
function getComputerChoice() {

// create a variable which store rock, paper, scissors.
let choices = ["rock", "paper", "scissors"];

// create a variable which will randomly select and STORE the data from previous variable.
let randomChoice = Math.floor(Math.random() * choices.length);

// DISPLAY the output of randomly chosen data
console.log(choices[randomChoice])
}

// call the function 
getComputerChoice()



// Logic to get human choice

// CREATE a function named getHumanChoice
function getHumanChoice() {

    // INPUT the choice of user and STORE it in a variable
    let userChoice = prompt("Enter rock paper or scissors").toLowerCase();
    
    // IF the answer == "rock" || "paper" || "scissors" THEN
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors" ) {
    // DISPLAY answer
    console.log(`${userChoice}`)
    }
    // ELSE
    else {
    // DISPLAY "ERROR"
    console.log("ERROR")
        }
    }
    // CALL function
    getHumanChoice()