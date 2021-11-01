import React from 'react'
import './style.css'

const ToDoItem = (props) => {

        return (
            <div className="todoItem">
                <li>
                <span onClick={()=> props.completeList(props.todo.id)}>{props.todo.name} </span>
                <span className="red"  onClick={()=> props.deleteList(props.todo.id)}>X</span> 
                <span className="blue" onClick={()=> props.setUpdate(props.todo.name,props.todo.id)}>Edit</span>
                 </li>
            </div>
        )

}
export default ToDoItem;
