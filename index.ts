#! /usr/bin/env  node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter the first number", type: "number", name: "firstNumber" },
  { message: "Enter the second number", type: "number", name: "secondNumber" },
  {
    message: "Select operaters to do action",
    type: "list",
    name: "operaters",
    choices: ["Addition", "multiplication", "division", "subtraction"],
  },
]);

console.log(answer);

// conditional statement

if (answer.operaters === "Addition") {
  console.log("the value is", answer.firstNumber + answer.secondNumber);
} else if (answer.operaters === "multiplication") {
  console.log("the value is", answer.firstNumber * answer.secondNumber);
} else if (answer.operaters === "division") {
  console.log("the value is", answer.firstNumber / answer.secondNumber);
} else if (answer.operaters === "subtraction") {
  console.log("the value is", answer.firstNumber - answer.secondNumber);
} else {
  console.log("please use valid operaters");
}  

console.log("The End")