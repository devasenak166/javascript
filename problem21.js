let number1 = prompt("enter the value");
let isPrime = true;

for (let i = 2; i < number1; i++) {
  if (number1 % i === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("prime number");
} else {
  console.log(" not a prime number");
}
