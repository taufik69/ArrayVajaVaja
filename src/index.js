const { argv } = require("yargs");
const path = require("path");
const Todo = require("./Todo");
const { saveFiles, readFiles } = require("./utils");
const { ADD, UPDATE, DONE, NEXT, LIST, FIND } = require("./commnad");
const { log } = require("console");
const { readFileSync, readFile } = require("fs");
const fileName = "../data.json";
const filePath = path.resolve(__dirname, fileName);

(function () {
  const data = readFileSync(filePath, "utf-8") || [];
  const todo = new Todo(data);
  console.log("todo object ", todo.todoList);
  const { _: baseCommand } = argv;

  //   switch (baseCommand[0]) {
  //     case ADD: {
  //       todo.addItem(argv.text);
  //       saveFiles(todo.todoList, filePath);
  //       console.log("todo added");
  //       break;
  //     }
  //     default: {
  //       throw new Error("Command not found");
  //     }
  //   }

  //   console.log(argv);
})();
