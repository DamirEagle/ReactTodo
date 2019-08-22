import React from "react";
import AddTodo from "./addTodo";
import todoList from "./todoList/todoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  render() {
    return;
    {
      <div>
        <AddTodo />
        <todoList />
      </div>;
    }
  }
}

export default App;
