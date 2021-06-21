import React, { useState } from "react";

export const AddTodo = (props) => {
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");


    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title and Description cannot be empty");
        }else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }


    return (
        <div className="container my-3">
            <h3>Add ToDo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">  
                    <h4><label htmlFor="title" className="form-label">ToDo Title</label></h4>
                    <input type="text" value={title} onChange= {(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder="Title Of ToDo"/>
                </div>
                <div className="mb-3">
                    <h4><label htmlFor="desc" className="form-label">ToDo Description</label></h4>
                    <input type="text" value={desc} onChange= {(e)=>{setDesc(e.target.value)}}  className="form-control" id="desc" placeholder="Description Of ToDo"/>
                </div>
                <button className="btn btn-success btn-sm">Add ToDo</button>
            </form>    
        </div>
    )
}

export default AddTodo
