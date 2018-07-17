import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import Projects from './components/projects';
import AddProject from './components/addProject';
import $ from 'jquery';
import Todos from './components/todos';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos:[]
    }
  }
  getProjects(){
    this.setState({projects: [
        
      {
        id:uuid.v4(),
      title:"Business Website",
      category: "Web Design"
    },
    {
      id:uuid.v4(),
      title:"Hostel Service",
      category: "Accommodation Service"
    },
    {
      id:uuid.v4(),
      title:"Mobile App",
      category: "Mobile Development"
    },
  
  ]

    });
  }
    getTodos(){
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        dataType: 'json',
        cache: false,
        success: function(data){
          this.setState({todos:data}, function(){
            console.log(this.state);
          });
        }.bind(this),
        error:function(xhr, status, err){
          console.log(err);
        }
      })
    }

    componentDidMount(){
     this.getProjects();
      this.getTodos();
    }

    componentWillMount(){
      
    }
  handleaddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  handleDeleteProject(id){
    
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    
    projects.splice(index,1);
    this.setState({projects:projects});
  }

  handleDeletetodo(id){
    
    let todos = this.state.todos;
    
    let index = todos.findIndex(x => x.id === id);
    
    todos.splice(index,1);
    this.setState({todos:todos});
  }
  render() {
    return (
      <div className="App">
       My Projects App
       <AddProject addproject = {this.handleaddProject.bind(this)}/>
       <Projects projects = {this.state.projects} onDelete = {this.handleDeleteProject.bind(this)} />
       <Todos todos = {this.state.todos} onDelete = {this.handleDeletetodo.bind(this)} />
       
      </div>
    );
  }
}

export default App;
