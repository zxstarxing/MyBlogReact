import { observable } from "mobx";

class TodoModel {
  @observable key;
  @observable todoName;
  @observable addTime;
  constructor(todo, time) {
    this.key = Math.random();
    this.todoName = todo;
    this.addTime = time;
  }

  toObject() {
    return {
      key: this.key,
      todoName: this.todoName,
      addTime: this.addTime
    };
  }
}

export default TodoModel;
