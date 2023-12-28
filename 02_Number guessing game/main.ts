import inquirer from "inquirer";

let system_generated_no = Math.floor(Math.random()*10)


let answer = await inquirer.prompt([
    {
    type : "number",
    name : "userguess",
    message : "What is your guess?"
    }
])

if (system_generated_no === answer.userguess){
    console.log ("Yayyyy correct answer!",
                 "You won !!!!")
}
else {
    console.log("Please try again!");
    
}
console.log ("Your guess :",answer.userguess)
console.log ("System No :",system_generated_no)
