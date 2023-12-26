import inquirer from "inquirer";

const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly enter your first no: "
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your second no: "
    },
    {
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplictaion", "Division"],
        message: "Select Operator: "
    },
]);

const {numberOne, numberTwo, operator} = answers;
if(numberOne && numberTwo && operator) {
    let result ;
    if(operator === "Addition"){
        result = numberOne + numberTwo
    } else   if(operator === "Subtraction"){
        result = numberOne - numberTwo
    } else if(operator === "Division"){
        result = numberOne / numberTwo
    }  else  if(operator === "Multiplictaion"){
        result = numberOne * numberTwo
    } 

    console.log("Your result is :", result)
} else{
    console.log("Kindly enter valid input")
}