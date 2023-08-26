// let arr1 = new Array(10);
// let arr1 = [];
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1.fill("taufik"));
// }

// let fillUpArray = arr1.fill("taufik");

// for (let i = 0; i < arr1.length; i++) {
//   let randomNumber = Math.floor(Math.random() * 10 + 1);
//   arr1[i] = randomNumber > 5 ? "x" : "o";
// }

// array fill with random number

// for (let i = 0; i < 10; i++) {
//   let randomNumber = Math.floor(Math.random() * 10 + 1);

//   arr1[i] = randomNumber > 5 ? "X" : 0;
// }
// console.log("arr1 :", arr1);

// array updating with for loop
// let arr1 = new Array("taufik", "islam");
// function arrayUpdate(arr1) {
//   for (let i = 0; i < arr1.length; i++) {
//     arr1[i] = `${i + 1} . ${arr1[i]}`;
//   }
//   return arr1;
// }

// console.log("arr1 :", arrayUpdate(arr1));

// store function in array

// let sum = (a, b) => a + b;
// let sub = (a, b) => a - b;
// let multiply = (a, b) => a * b;
// let div = (a, b) => a / b;
// let mod = (a, b) => a % b;

// const functionAll = [sum, sub, multiply, div, mod];

// let a = 10;
// let b = 20;

// for (let i = 0; i < functionAll.length; i++) {
//   const element = functionAll[i];
//   const functionName = element.name;
//   const result = element(a, b);
//   console.log(`${functionName} = ${result}`);
// }
