const { argv } = require("yargs");
const path = require("path");
const Todo = require("./Todo");
const { saveFiles, readFiles } = require("./utils");
const { ADD, UPDATE, DONE, NEXT, LIST, FIND } = require("./commnad");
const { readFileSync, readFile } = require("fs");
const fileName = "../data.json";
const filePath = path.resolve(__dirname, fileName);

(function () {
  const data = readFileSync(filePath, "utf-8") || [];
  const todo = new Todo(data);

  // console.log("todo object ", todo.todoList);
  const { _: baseCommand } = argv;

  console.log(baseCommand[0]);
  // switch (baseCommand[0]) {
  //   case ADD: {
  //     todo.addItem(argv.text);
  //     saveFiles(todo.todoList, filePath);
  //     console.log("todo added");
  //     break;
  //   }
  //   case UPDATE: {
  //     todo.update(argv.id, argv.text);
  //     console.log("Todo Updated");
  //     saveFiles(todo.todoList, filePath);
  //     break;
  //   }
  //   case NEXT: {
  //     const item = todo.next();
  //     console.log(`${item.id} - ${item.text} [${item.created}]`);
  //     break;
  //   }
  //   case DONE: {
  //     todo.done();
  //     console.log("one item completed ");
  //     saveFiles(todo.todoList, filePath);
  //     break;
  //   }
  //   case FIND: {
  //     const item = todo.find(argv.term);
  //     if (item.length === 0) {
  //       console.log("item not found in todo");
  //       break;
  //     } else {
  //       for (let i = 0; i < item.length; i++) {
  //         console.log(`${item[i].id} - ${item[i].text} [${item[i].created}]`);
  //       }
  //       break;
  //     }
  //   }
  //   case LIST: {
  //     if (todo.todoList.length === 0) {
  //       console.log("item not found in todo");
  //       break;
  //     } else {
  //       for (let i = 0; i < item.length; i++) {
  //         console.log(
  //           `${todo.todoList[i].id} - ${todo.todoList[i].text} [${todo.todoList[i].created}]`
  //         );
  //       }
  //       break;
  //     }
  //   }
  //   default: {
  //     throw new Error("Command not found");
  //   }
  // }
  console.log(baseCommand);
})();
