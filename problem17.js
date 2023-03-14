let number1 = prompt("enter number:");
let fact = 1;
if (number1 > 0) {
  for (let i = 1; i <= number1; i++) {
    fact = fact * i;
  }
}
console.log(fact);
