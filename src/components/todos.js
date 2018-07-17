import React, { Component } from 'react';
import TodoItem from './todoItem';


class Todos extends Component {
  deletetodo(id){
     
    this.props.onDelete(id);
  }
  render() {
    let todoItems;
  if(this.props.todos){
    todoItems = this.props.todos.map(todo =>{
      //console.log(project);
      return(
        <TodoItem onDelete={this.deletetodo.bind(this)} key = {todo.id} todo ={todo}/>
      );
    });
  }
    //console.log(this.props);
    return (
      <div className = "Projects">
      <h3> Total Todos </h3>
        {todoItems}
        </div>
    );
  }
}




export default Todos;