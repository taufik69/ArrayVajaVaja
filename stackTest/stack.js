const Stack = require("../main");
const stack = new Stack();

// Take a random text
let text = "taufik";

for (let i = 0; i < text.length; i++) {
  stack.push(text.charAt(i));
}

let reverseText = "";
while (!stack.isArrayEmpty()) {
  reverseText += stack.pop();
}

console.log(reverseText);
