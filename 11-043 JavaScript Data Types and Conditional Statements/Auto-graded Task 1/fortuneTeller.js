//Prompts user to input answers to questions and saves them as variables
const mothersFirstName = prompt("What is your mothers first name?");
const streetName = prompt("What is your street name?");
const favColour = prompt("What is your favourite colour?");
const userAge = Number(prompt("What is your age?"));
const randomNumber = Number(prompt("Pick a number between 1 - 10"));

//Create a template literal to output a multiline string
console.log(`
In ${randomNumber} years you are going to meet your best friend named ${mothersFirstName} ${streetName}.
You will get married in ${Math.round(userAge + randomNumber)} years and have ${Math.round(userAge % randomNumber)} children.
In ${Math.round(userAge / randomNumber)} years you are going to dye your hair ${favColour}.
`);
