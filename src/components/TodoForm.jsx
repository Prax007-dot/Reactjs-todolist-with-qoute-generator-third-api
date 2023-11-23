import React from 'react';
import {useState} from 'react';
import './TodoForm.css';
import Qoutes from './Qoutes';
const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
   
    const handleSubmitFunc=(e)=>{
        e.preventDefault();
        if(value!==""){addTodo(value);}else{alert("Enter Something");}
        
        setValue("");
    }

    
    return(<>
    
    <h1 className='heading'> TODO LIST</h1>
    
    
        <form onSubmit={handleSubmitFunc}>
            <input className='todo-inp'type='text'value={value} placeholder='Enter Task' onChange={(e)=>{setValue(e.target.value);}}></input>
            <button type="submit" className='todo-btn'>Add Task</button>
          
        </form>
   
    
    </>);
}

export default TodoForm;
