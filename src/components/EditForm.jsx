import React from "react";
import "./EditForm.css";
import {useState} from 'react';
 

const EditForm =({task,editTask})=>{
    const[value,setValue] = useState(task.task);
    const handleOnEdit = (e) =>{
        e.preventDefault();
        editTask(value,task.id);

    }
    return(<>
    <form onSubmit={handleOnEdit}>
            <input className='todo-inp-edit'type='text' value={value} placeholder='Update Task' onChange={(e)=>{setValue(e.target.value);}}></input>
            <button type="submit" className='todo-btn-edit'>Update Task</button>
            
        </form>
        
    </>);
}

export default EditForm;