import React , { useState} from "react";
import ToDoItem from "../ToDoItem";
import "./style.css";
const ToDo = ()=>{
const [todos,setTodos]=useState([
    { id: 0, name: "Sleep" },
    { id: 1, name: "Eat" },
    { id: 2, name: "Code" }
])

  //Functions
  //add task to list
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.task.value){//check if text field is empty or not
        const todo= { id: todos.length +1 , name: e.target.task.value}; //create new object 
        setTodos([...todos, todo]) // add object to todos array
        e.target.task.value = "";//to make value text empty in text feild "task"
        }

}
//end add func

//update 
const setUpdate = (name, id) => {
    const newTask = prompt('Please enter your new task!') //new input value
    setTodos(todos.map(todo => {
        if (todo.id === id) {
          todo.name = newTask
        }
        return todo
    }

      ))
      console.log(todos);

  }//end of update
  
//delete task from list 
const deleteList= (id)=>{
    setTodos(todos.filter(todo=> todo.id !==id))
    
    }// end of delete

    return (
      <div className="todo">
       
        <h1> ToDoList</h1>
        <form onSubmit= {handleClick}>
          <input type="text" name="task" />
          <button>Add Task</button>
        </form>
        <ul>
        {todos.map (
                (todo , i)=>(
             
              <ToDoItem todo={todo} key={i} deleteList = {deleteList} setUpdate={setUpdate}/>
                )
          )
          }
        </ul>
      </div>
    )
  
}
export default ToDo;
