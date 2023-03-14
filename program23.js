let word = prompt("enter the word");
let wordReverse = word.split("").reverse().join("");
// console.log(word.split("").reverse().join(""));
if (word == wordReverse) {
  console.log("palindrome");
} else {
  console.log("not a palindrome");
}
