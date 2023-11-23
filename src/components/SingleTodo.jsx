import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './SingleTodo.css';

const SingleTodo=({task,toggleComplete,isEditFun,deleteFun})=>{
    return(
    <div className='SingleTodo' >
        <p className={`${task.completed ? 'completed' : ""}`} onClick={()=>toggleComplete(task.id)}>{task.task}</p>
    
        <div className='todo'>
             <FontAwesomeIcon icon={faPen} onClick={()=>isEditFun(task.id)} />
            <FontAwesomeIcon  icon={faTrash} onClick={()=>deleteFun(task.id)} />
        </div>
    </div>);

}

export default SingleTodo;