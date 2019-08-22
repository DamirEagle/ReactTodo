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
    return (
      <div>
        <AddTodo />
        <todoList addTodoFn={this.addTodo} />
      </div>
    );
  }
  addTodo = async todo => {
    await this.setState({
      todos: [
        ...this.state.todos,
        {
          text: todo,
          completed: false
        }
      ]
    });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };
}

export default App;
