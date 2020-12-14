import React, { Component } from 'react';
import './Student.css';

class Student extends Component{
    constructor(props){
        super(props);
        this.state={
            isEdit:false,
        };
        this.onDelete=this.onDelete.bind(this);
        this.onEdit=this.onEdit.bind(this);
        this.onEditSubmit=this.onEditSubmit.bind(this);
        
    }

    onDelete(){
        const {id}=this.props;
        this.props.onDelete(id);
    }
    
    onEdit(){
        this.setState({isEdit:true})
    }

   onEditSubmit(event){
       event.preventDefault();
        this.props.onEditSubmit(this.idInput.value,this.nameInput.value,this.collegeInput.value,this.props.id);
        this.setState({isEdit:false});
    }

    render(){
    const {id,name,college}=this.props;
        return(
            <div className="student__container">
            {this.state.isEdit?(
                <form onSubmit={this.onEditSubmit}>
                <input defaultValue={id} ref={idInput=>this.idInput=idInput}></input>
                <input defaultValue={name} ref={nameInput=>this.nameInput=nameInput}></input>
                <input defaultValue={college} ref={collegeInput=>this.collegeInput=collegeInput}></input>
                <button className="btn__student">Save</button>
                </form>
                ):(
                <div>
                {id}
                {" | "}
                {name}
                {" | "}
                {college}
                {" | "}
                <button className="btn__student" onClick={this.onDelete}>Delete</button>
                {" | "}
                <button className="btn__student" onClick={this.onEdit}>Edit</button>
                </div>    )
            }
            </div>
        );
    }
}

export default Student;