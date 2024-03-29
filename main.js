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

// let arr = [10, 40];

// ----> nesting array breaking method instead of spread operator
// Array.prototype.push.apply(another array which you want to break)
// let arr = [10, 40, [12, "taufik"]];
// console.log("array in array : ", ...arr);

// -----> this is spreading method before spred ... operator arrived
// let arr = [10, 40];
// let arr2 = [30, 50];
// Array.prototype.push.apply(arr, arr2);
// console.log(arr);

// --->  unshift by es6 and previous version

// let arr1 = [10, 30, 50];
// let arr2 = [100, 300, 500];
// arr1.unshift(...arr2);
// console.log("arr1 : ", arr1);

// Array.prototype.unshift.apply(arr1, arr2);
// console.log("arr1 is : ", arr1);

// ---> splice method in array :

// let arr2 = [100, 300, 500];
// let arr3 = [10, 30, 50];
// arr2.splice(1, 0, 10);
// arr2.splice(3, 0, 10, 30, 60);
// arr2.splice(3, 0, arr3);
// arr2.splice(3, 0, ...arr3);
// console.log("after applying arr2 splice method : ", arr2);

// -----> array of object

// find one and update

// let student = [
//   { id: 1, name: "taufik" },
//   { id: 2, name: "islam" },
//   { id: 3, name: "jame" },
//   { id: 4, name: "mohon" },
// ];

// let givenArray = 3;
// let updatedElement = "hello";

// for (i = 0; i < student.length; i++) {
//   if (givenArray === student[i].id) {
//     student[i].name = updatedElement;
// break;
//   }
// }
// console.log(student);

// ----> find one and push  in array on object

// let student = [
//   { id: 1, name: "taufik" },
//   { id: 2, name: "islam" },
//   { id: 3, name: "jame" },
//   { id: 4, name: "mohon" },
// ];

// let addText = "hello jonogon";

// for (i = 0; i < student.length; i++) {
//   if (student.length === student[i].id) {
//     student[i].name = addText;
// break
//   }
// }
// console.log(student);

// ----> delete element in splice method

// let arr = [19, 34, 423, 35];
// arr.splice(1, 1);
// console.log(arr);

// ----------->  Array filter method

// let arr = [19, 34, 423, 35];
// console.log(arr.__proto__.constructor);

// ----> Array entries method woriking principle

// let arr = [19, 34, 423, 35];

// let newarr = arr.entries();
// for (a of newarr) {
//   console.log(a);
// }

// ---> fill method in array

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi", 2, 3);
// console.log("fruits: ", fruits);

// -----> array flat method :
// const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
// const newArr = myArr.flat(2);
// console.log(newArr);

// ---> Array from method

// let newArr = Array.from("taufik");
// console.log(newArr);

// ---> inclueds method in array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.includes("Banana", 3));

// ----> join method in array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join(" and ");
// console.log(text);

// -----> key method

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();
// for (x of keys) {
//   console.log("x", x);
// }

// ------> last index method

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let index = fruits.lastIndexOf("Apple");
// console.log(index);

// -----> little bit problem

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// for (i = 0; i < fruits.length; i++) {
//   let newrr = fruits[i].toUpperCase();
//   console.log(newrr);
// }

// const myArr = new Int8Array(1220);
// let unit = new Uint8ClampedArray(10000);
// console.log(myArr);
// console.log(unit);

// ----------> home made error
// try {
//   let errorHouse = {
//     nam: "taufik tor nai tai error ",
//     age: 24,
//     district: "joypurhat",
//     maritual_Status: false,
//   };
//   if (10 == 10) {
//     throw errorHouse;
//   }
// } catch (err) {
//   console.log(err);
// }

// const ADD = "add";
// const UPDATE = "update";
// const DONE = "done";
// const NEXT = "next";
// const LIST = "list";
// const FIND = "find";

// switch (ADD) {
//   case ADD: {
//     console.log(ADD);
//   }
//   case UPDATE: {
//     console.log(UPDATE);
//   }
//   case DONE: {
//     console.log(DONE);
//   }
//   case NEXT: {
//     console.log(NEXT);
//   }
//   case LIST: {
//     console.log(LIST);
//   }
//   case FIND: {
//     console.log(FIND);
//   }
// }

// ----> Make a array desk

// const max_size = 10;
// class Stack {
//   constructor() {
//     this.list = new Array(max_size);
//     this.top = -1;
//   }

//   push(item) {
//     if (this.top >= max_size) {
//       console.log("stack overflow ");
//       return false;
//     } else {
//       this.list[++this.top] = item;
//       // console.log(this.list);
//       return true;
//     }
//   }
//   pop() {
//     if (this.isArrayEmpty()) {
//       console.log("stack underflow");
//       return false;
//     } else {
//       delete this.list[this.top];
//       this.top--;
//       // console.log("deleted:", this.top);
//       // console.log("popitem", this.list);
//       return this.list[++this.top];
//     }
//   }
//   peek() {
//     if (this.isArrayEmpty()) {
//       console.log("stack underflow");
//       return false;
//     } else {
//       return this.list[this.top];
//     }
//   }
//   isArrayEmpty() {
//     return this.top < 0 ? "true" : false;
//   }
// }

// module.exports = Stack;

// Now crate instance of stack class
// const homemadeArray = new stack();

// // push the item in homemade array.
// console.log(homemadeArray.push("taufik"));
// console.log(homemadeArray.push("Mithila"));

// pop the array is homemader array
// console.log(homemadeArray.pop());
// console.log(homemadeArray.pop());

//---> use peek method in homemade array

// console.log("peeK :", homemadeArray.peek());

// ---> check aray is empty or not :
// console.log(homemadeArray.isArrayEmpty());

// The next project are arrived this is queue concept

/**
 * todo: when you have to make Queue . thata algorith has 2 variable
 * ? one is fornt and others is rear and definately need an array
 */

const Max_Size = 10;
class Queue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.queue = new Array(Max_Size);
  }

  // enQueue means add entities in existing Queue
  enQueue(item) {
    if (this.rear === Max_Size) {
      console.log("Queue is full");
      return false;
    }
    this.queue[this.rear++] = item;
  }

  // deQueue means remove entities in existing Queue

  deQueue() {
    if (this.rear === this.front) {
      console.log("Queue is empty");
      return false;
    }
    const item = this.queue[this.front];
    for (let i = this.front; i < this.rear; i++) {
      this.queue[i] = this.queue[i + 1];
    }
    delete this.queue[--this.rear];
    return item;
  }

  showQueue() {
    if (this.front === this.rear) {
      console.log("Queue is empty");
      return false;
    }
    for (let i = this.front; i < this.rear; i++) {
      console.log("[Displaying ]", this.queue[i]);
    }
  }
  next() {
    if (this.front === this.rear) {
      console.log("Queue is Empty");
      return false;
    }
    return this.queue[this.front];
  }
  isEmpty() {
    return this.front === this.rear;
  }
}

const queue = new Queue();
queue.enQueue(10);
// queue.deQueue();

console.log(queue.isEmpty());
