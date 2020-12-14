import React, { Component } from 'react';
import './AddStudent.css';

class AddStudent extends Component{
    constructor(props){
        super(props);
        this.onAdd=this.onAdd.bind(this);
    }

    onAdd(event){
        event.preventDefault();
        this.props.onAdd(this.idInput.value,this.nameInput.value,this.collegeInput.value);
        this.idInput.value="";
        this.nameInput.value="";
        this.collegeInput.value="";
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onAdd}>
                    <label className="student__label">  Id  </label>
                    <input ref={idInput=>this.idInput=idInput}></input>
                    <label className="student__label">  Name  </label>
                    <input ref={nameInput=>this.nameInput=nameInput}></input>
                    <label className="student__label">  College  </label>
                    <input ref={collegeInput=>this.collegeInput=collegeInput}></input>
                    <button className="btn__student__add">Add</button>
                </form>
            </div>
        );
    }
}

export default AddStudent;