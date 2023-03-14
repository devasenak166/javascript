let number1 = prompt("enter the first value:");
let number2 = prompt("enter the second number:");
let number3 = prompt("enter the third number:");
if (
  number1 + number2 > number3 &&
  number2 + number3 > number1 &&
  number1 + number3 > number2
) {
  console.log("Wow ,Forms Triangle !...");
} else {
  console.log("Oops, Can't form Triangle");
}
