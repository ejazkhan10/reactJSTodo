import React, { Component } from 'react';
import '../projectstyle.css';

class ProjectItem extends Component {
    deleteProject(id){
       // console.log("test");
       this.props.onDelete(id);
    }
  render() {
   // console.log(this.props);
    return (
      <li className="Projects">
       <strong>{this.props.project.title}</strong> - {this.props.project.category} <a href="#" onClick ={this.deleteProject.bind(this, this.props.project.id)}> X </a>
      
      </li>
    );
  }
}




export default ProjectItem;