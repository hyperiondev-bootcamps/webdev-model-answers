/* 
Obtain input from user in litres and convert to Number. 
Divide input by 1000 in order to obtain kl
*/
const userInput =
  Number(prompt("Input the number of litres of water they have used")) / 1000;

// Prompt to check if user is in an indigent household
const indigentHousehold = prompt(
  "Are you in an indigent household? Yes or No"
).toLowerCase();

// Calculate  bill for 0 to 6kl and set to a variable for use later
const step1 = 6 * 15.73;

// Calculate  bill for 6 to 10.5kl and set to a variable for use later
const step2 = 4.5 * 22.38;

// Calculate  bill for 10.5 to 35kl and set to a variable for use later
const step3 = 25 * 31.77;

// Check if household is indigent and that their consumption is less than 10.5kl
if (indigentHousehold == "yes" && userInput < 10.5) {
  console.log(
    `This is free as your water consumption is ${userInput}kl and you are in an indigent household`
  );
}

// If consumption is less than 6kl bill
else if (userInput <= 6) {
  console.log(`Your water bill will be R${(userInput * 15.73).toFixed(2)}`);

  /* 
  If consumption is more than 6kl and less than 10.5kl,
  bill will be step 1 plus difference charged at step 2 rate
  */
} else if (userInput > 6 && userInput < 10.5) {
  console.log(
    `Your water bill will be R${(step1 + (userInput - 6) * 22.38).toFixed(2)}`
  );

  /* 
  If consumption is more than 10.5kl and less than 35kl,
  bill will be step1 plus step2 + difference charged at step 3 rate.
  */
} else if (userInput > 10.5 && userInput < 35) {
  console.log(
    `Your water bill will be R${(
      step1 +
      step2 +
      (userInput - 10.5) * 31.77
    ).toFixed(2)}`
  );

  /*
  If consumption is more than 35kl, 
  bill will be step1 plus step2 + step3 plus difference charged at step 3 rate
  */
} else if (userInput > 35) {
  console.log(
    `Your water bill will be R${(
      step1 +
      step2 +
      step3 +
      (userInput - 35) * 69.76
    ).toFixed(2)}`
  );
} else {
  console.log(
    `Unfortunately there has been an error, please retry the calculation`
  );
}
