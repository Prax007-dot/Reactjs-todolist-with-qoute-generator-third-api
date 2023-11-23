import React, { useState } from 'react';
import './TodoWrapper.css';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from "uuid";
import SingleTodo from './SingleTodo';
import EditForm from './EditForm';
import Qoutes from './Qoutes';
uuidv4();



const TodoWrapper =()=>{
    const [todos,setTodos] = useState([]);
    
//function to add task in todo task in todo form calling functionfrom todowrapper passing 
    const addTodo =(todo)=>{
        
        setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}]);
        
    }

    const toggleComplete=(taskid)=>{
        setTodos(
            todos.map((todo)=>
            todo.id === taskid ? { ...todo, completed: !todo.completed } : todo 
            )
           
            
        );
        todos.map((todo)=> todo.id === taskid && !todo.completed ? alert("Hurray You Have Completed the Task " + todo.task):{} )
        
        
    }
    
    const isEditFun = (taskid) =>{
        setTodos(
            todos.map(
                (todo)=>
                    todo.id === taskid ? {...todo,isEditing: !todo.isEditing}:todo
                

            )
        );
        console.log(todos);
    }

    const editTask = (value, id) =>{
        setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, task:value, isEditing: !todo.isEditing } : todo
            )
          );
    }

    const deleteFun = (id) =>{
        setTodos(todos.filter((todo)=> todo.id !== id ));
    }
    
    
    return (

        <>
        <div className='TodoWrapper'>
            <br></br>
            <TodoForm addTodo={addTodo}/>
            {/* Display Todos */}
            {todos.map(
                (todos)=> 
                todos.isEditing ? (<EditForm task={todos} editTask={editTask} key={todos.id}/>) : (<><SingleTodo task={todos} key={todos.id} toggleComplete={toggleComplete} isEditFun={isEditFun} deleteFun={deleteFun} /></>)
            )}
            <Qoutes/>
        </div>
       
        </>
    );
}

export default TodoWrapper;
