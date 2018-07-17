import React, { Component } from 'react';

import uuid from 'uuid';

class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:[]
        }
    }
  static defaultProps = {
      categories : ["Web Design", "Web Development", "Mobile Development"]
  }
  handleSubmit(e){
      //console.log("Submitted");
      //console.log(this.refs.title.value);
      //this.refs.title.value ? console.log(this.refs.title.value) : alert("Please Input title");
     if(this.refs.title.value === ""){
         alert("Please input a title");
     }
     else{
         this.setState({newProject: {
             id:uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
         }}, function(){
            // console.log(this.state);
            this.props.addproject(this.state.newProject);
         });
     }
      e.preventDefault();
  }
  render() {
   let categoryOptions = this.props.categories.map(category => {
    return <option key ={category} value ={category}> {category} </option>
   });
    //console.log(this.props);
    return (
      <div>
       <h1> Add Project </h1>

       <form onSubmit ={this.handleSubmit.bind(this)}>

           <div>
               <label> Title </label> <br/>
                <input type="text" ref="title"/>
               </div>
               <div>
               <label> Category </label> <br/>
                <select ref="category">
                {categoryOptions}
                </select>
               </div>
               <input type ="submit" value="submit"/>

    </form>
        </div>
    );
  }
}




export default AddProject;