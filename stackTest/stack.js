const Stack = require("../main");
const stack = new Stack();

// Take a random text
let text = "taufik";
let reverseText = "";

for (let i = 0; i < text.length; i++) {
  stack.push(text.charAt(i));
}

// while (!stack.isArrayEmpty()) {
//   reverseText += stack.pop();
// }
console.log(stack.pop());
// console.log(reverseText);
