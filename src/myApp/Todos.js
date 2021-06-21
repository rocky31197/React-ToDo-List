import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="my-3">ToDo's List</h3>
            {props.todosVar.length===0? "No ToDos To Display" : 
            props.todosVar.map((todo)=>{
                return <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete} />
            })
            }
            
        </div>
    )
}
export default Todos


