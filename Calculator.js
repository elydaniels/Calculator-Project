// Helpful link
// https://www.codecademy.com/article/getting-user-input-in-node-js

// console.log("Welcome to Node CLI Calculator App");
// console.log("");
// console.log("Please read the acceptance criteria to get started.");

// Intro

// Ask for user name

// Ask what a operation they want to complete

// Ask user for first number

// Ask user for second number

// complete operation / display output

// ask user if they want to run again or exit

// exit statement
const prompt = require('prompt-sync')({ sigint: true })
console.log('Welcome to Node CLI Calculator App');

function operation(num1, num2, action) {
  switch (action) {
    case "Addition":
      return num1 + num2;
    case "Subtraction":
      return num1 - num2;
    case "Multiplication":
      return num1 * num2;
    case "Division":
      return num1 / num2;
  }
}

const userName = prompt("What is your Name? ");
console.log(`Hey there ${userName}`);

let flag = true;
while (flag) {
  let userAction = prompt(
    "What do you want to do? Addition, Subtraction, Multiplication, Division? "
  );
  let firstNumber = Number(prompt("What is your first number? "));
  let secondNumber = Number(prompt("What is your second number? "));

  let result = operation(firstNumber, secondNumber, userAction);
  console.log(result);

  let useAgain = prompt("Would you like to run the calculator again? (Y/N) ");
  if (useAgain == "Yes") {
    console.clear();
  } else {
    flag = false;
    console.clear();
    console.log("Have a great rest of your day");
    process.exit();
  }
}