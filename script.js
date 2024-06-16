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