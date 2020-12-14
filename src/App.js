import React,{Component} from 'react';


import './App.css';
import Student from './Student';
import AddStudent from './AddStudent';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      students :[{
        id:1,
        name:'sheela',
        college:'EPITA',
      },
    {
      id:2,
      name:'marie',
      college:'EPITECH',
    }],
    };
    this.onDelete=this.onDelete.bind(this);
    this.onEditSubmit=this.onEditSubmit.bind(this);
    this.onAdd=this.onAdd.bind(this);
  }

  onDelete(id){
    
    let students = this.state.students;
    const studentsNew=students.filter(student=>{
   return student.id !== id;
    })
    this.setState({students:studentsNew}); 
  }

  onEditSubmit(id,name,college,originalId){
    console.log(name);
   let students = this.state.students;

    const studentsNew=students.map(student=>{
   if(student.id === originalId){
    student.id=id;
    student.name=name;
    student.college=college;
   }
   return student;
    })
    this.setState({students:studentsNew}); 
    

  }

  onAdd(id,name,college){
console.log(id,name,college);
let students = this.state.students;
students.push({id:id,name:name,college:college})
this.setState({students});
  }

  render(){
    return (
      <div className="app">
        <h1 style={{textAlign:"center"}}>STUDENTS LIST</h1>
        <AddStudent onAdd={this.onAdd}/>
        <hr></hr>
        {this.state.students.map(student=>{
        return <Student key={student.id} {...student} onDelete={this.onDelete} onEdit={this.onEdit} onEditSubmit={this.onEditSubmit}/>
      })
        }
      </div>
    );
  }
}

export default App;
