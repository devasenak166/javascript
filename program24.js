let word = prompt("enter the word");
let vowels = word.split("");
console.log(vowels);
console.log(vowels.length);
let result = "";
for (let i = 0; i < vowels.length; i++) {
  if (
    vowels[i] == "a" ||
    "e" ||
    "i" ||
    "o" ||
    "u" ||
    "A" ||
    "I" ||
    "E" ||
    "O" ||
    "U"
  ) {
    continue;
  }
  
  
  result += vowels[i];
 
}

console.log(result);
