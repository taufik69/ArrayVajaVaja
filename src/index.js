const { argv } = require("yargs");
const path = require("path");
const Todo = require("./Todo");
const { log } = require("console");
const { saveFiles, readFiles } = require("./utils");
const { ADD, UPDATE, DONE, NEXT, LIST, FIND } = require("./commnad");

const fileName = "../data.json";
const filePath = path.resolve(__dirname, fileName);

(function () {
  const data = readFiles(filePath) || [];
  const todo = new Todo(data);
  const { _: baseCommand } = argv;
  // log("command ", data);
  switch (baseCommand[0]) {
    case ADD: {
      todo.addItem(argv.text);
      saveFiles(todo.todoList, filePath);
      console.log("todo added");
      break;
    }
    case UPDATE: {
      todo.update(argv.id, argv.text);
      console.log("Todo Updated");
      saveFiles(todo.todoList, filePath);
      break;
    }
    case NEXT: {
      const item = todo.next();
      const {id , text , created } = item;
      console.log(`---> ${id}-${text} [${created}]`);
      break;
    }
    case DONE: {
      todo.done();
      console.log("Frist  item Deleted completed ");
      saveFiles(todo.todoList, filePath);
      break;
    }
    case FIND: {
      const item = todo.find(argv.term);
      if (item.length === 0) {
        console.log("item not found in todo");
        break;
      } else {
        for (let i = 0; i < item.length; i++) {
          console.log(
            ` id: ${item[i].id} -Text: ${item[i].text} Date: [${item[i].created}]`
          );
        }
        break;
      }
    }
    case LIST: {
      let allList = todo.list();
      if (allList.length === 0) {
        console.log("item not found in todo");
        break;
      } else {
        for (let i = 0; i < allList.length; i++) {
          console.log(
            `${allList[i].id} - ${allList[i].text} [${allList[i].created}]`
          );
        }
        break;
      }
    }
    default: {
      throw new Error("Command not found");
    }
  }
})();
