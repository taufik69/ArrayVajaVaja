/**
 * @param {Array } arr
 *
 */

function genareId(arr) {
  if (arr.length === 0) {
    return 1;
  } else {
    return arr[arr.length - 1].id + 1;
  }
}

/**
 * @property todoList
 * @method addItem
 * @method update
 * @method done
 * @method next
 * @method find
 * @method list
 */

class Todo {
  constructor(todoList = []) {
    if (todoList.length === 0) {
      this.todoList = todoList;
    } else {
      this.todoList = JSON.parse(todoList);
    }
  }

  /**
   *@this is additem Method;
   */

  addItem(text = "taufik") {
    const date = new Date();
    const item = {
      text: text,
      id: genareId(this.todoList),
      created: `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`,
    };
    console.log("Date is : ", item.created);
    this.todoList.push(item);
  }

  /**
   *@this is Update Method;
   */

  update(id, text) {
    for (let i = 0; i < todoList.length; i++) {
      if (this.todoList[i].id === id) {
        this.todoList[i].text = text;
        break;
      }
    }
  }

  /**
   *@this is done Method . this method principle array frist element was removed when this method are called;
   */
  done() {
    return this.todoList.shift();
  }

  /**
   *@this is next Method . this method principle array retuned the frist element;
   */
  next() {
    return this.todoList[0];
  }

  /**
   *@this is List Method . this method principle array retuned whole array;
   */
  list() {
    return this.todoList;
  }

  /**
   *@this is find Method . this method principle find the item or element entire the array ;
   */

  find(term) {
    let result = [];
    for (let i = 0; i < this.todoList.length; i++) {
      const item = this.todoList[i];
      if (item.text.toLowerCase() === term.toLowerCase()) {
        result.push(item);
      }
    }
    return result;
  }
}

module.exports = Todo;
