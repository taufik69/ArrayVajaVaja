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

// -----------> Nested or two dimentional Array

// let TwoD = [
//   [1, 2],
//   [3, 5],
//   [6, 7],
//   [10, 11, 13, 14],
// ];

// for (let i = 0; i < TwoD.length; i++) {
//   // console.log(`array X: ${TwoD[i][0]} Y: ${TwoD[i][1]}`);
//   for (let j = 0; j < TwoD[i].length; j++) {
//     console.log(`[${TwoD[i][j]}]`);
//   }
// }

// ---> play with star in nested array
// console.log("stars \n".repeat(4));

// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     let stars = "*".repeat(i);
//     console.log(stars);
//   }

// }
// ----> matrix sum vai loop

// let matrixA = [
//   [1, 2],
//   [3, 5],
//   [6, 7],
// ];

// let matrixB = [
//   [1, 2],
//   [3, 5],
//   [6, 7],
// ];

// function sumOfMatrix(matrixA, matrixB) {
//   let result = [];
//   for (let i = 0; i < matrixA.length; i++) {
//     let matrixAll = [];
//     for (let j = 0; j < matrixA[i].length; j++) {
//       matrixAll.push(matrixA[i][j] + matrixB[i][j]);
//     }
//     result.push(matrixAll);
//   }
//   return result;
// }

// let finalResult = sumOfMatrix(matrixA, matrixB);
// console.log(finalResult);
