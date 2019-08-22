import React from "react";

class addTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }
  render() {
    <div>
      <form
        onSubmit={e => {
          this.onSubmit(e);
        }}
      >
        <input
          id="addTodoInput"
          type="text"
          onChange={e => {
            this.updateInput(e);
          }}
        />
        <button type="submit" />
      </form>
    </div>;
  }
  updateInput = e => {
    let newWord = e.target.value;
    this.setState({ todo: newWord });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    Document.getElementById("addTodoInput").value = "";
  };
}

export default addTodo;
