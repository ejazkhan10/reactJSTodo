import React, { Component } from 'react';


class TodoItem extends Component {
    deletetodo(id){
       // console.log("test");
       this.props.onDelete(id);
    }
  render() {
   // console.log(this.props);
    return (
      <li className="Projects">
       <strong>{this.props.todo.title}</strong> - {this.props.todo.completed} <a href="#" onClick ={this.deletetodo.bind(this, this.props.todo.id)}> X </a>
      
      </li>
    );
  }
}




export default TodoItem;