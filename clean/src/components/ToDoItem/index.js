import React from 'react'
import './style.css'

const ToDoItem = (props) => {

        return (
            <div className="todoItem">
                <li>{props.todo.name} <span className="red"  onClick={()=> props.deleteList(props.todo.id)}>X</span> 
                 <span className="blue" onClick={()=> props.setUpdate(props.todo.name,props.todo.id)}>Edit</span></li>
            </div>
        )

}
export default ToDoItem;
