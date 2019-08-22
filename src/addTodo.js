import React from 'react';

class addTodo extends React.Component{
  constructor(){
    super();
    this.state = {
      todo: ''
    }
  }
  render(){
    <div>
      <forme onSubmit = {(e) => {this.onSubmit(e)}}>
        <input type='text' onChange = {(e)=>{this.updateInput(e)}}></input>
        <button type = 'submit'></button>
      </form>
    </div>
  }
  updateInput = (e) =>{
    let newWord = e.target.value;
    this.setState({todo: newWord});
  }
  onSubmit = e => {
    e.preventDefault();

  }
}

export default addTodo