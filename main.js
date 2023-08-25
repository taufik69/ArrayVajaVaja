// let arr1 = new Array(10);
let arr1 = [];
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1.fill("taufik"));
// }

// let fillUpArray = arr1.fill("taufik");

// for (let i = 0; i < arr1.length; i++) {
//   let randomNumber = Math.floor(Math.random() * 10 + 1);
//   arr1[i] = randomNumber > 5 ? "x" : "o";
// }

for (let i = 0; i < arr1.length; i++) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  arr1[i].push("x");
}

console.log(arr1);
