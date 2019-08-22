import React from "react";
import Todoitem from "../todoItem/todoItem";

class Todolist extends React.Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="todoListContainer">
        {todos.map((_todo, _index) => {
          return (
            <Todoitem
              updateTodoFn={this.updateTodo}
              key={_index}
              todo={_todo}
            />
          );
        })}
      </div>
    );
  }

  updateTodo = todo => {
    this.props.updateTodoFn(todo);
  };
}
export default Todolist;
