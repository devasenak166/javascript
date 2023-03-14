let number1 = +prompt("enter the number:");
let term1 = 0;
let term2 = 1;
let term3;
if (!isNaN(number1)) {
  for (let i = 0; i <= number1; i++) {
    console.log(term1);
    term3 = term1 + term2;
    term1 = term2;
    term2 = term3;
  }
} else {
  console.log("enter the valid value");
}
