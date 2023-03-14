let number1 = prompt("enter the first number:");
let number2 = prompt("Enter the second number:");
let minimum, GCD;
if (number1 < number2) {
  minimum = number1;
} else {
  minimum = number2;
}
// console.log(minimum);
for (let i = 1; i <= minimum; i++) {
  if (number1 % i == 0 && number2 % i == 0) {
    GCD = i;
  }
}
console.log(GCD);
