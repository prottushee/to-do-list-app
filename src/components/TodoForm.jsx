import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(value){
            addTodo(value);
        }setValue("");
    }
    return (
    <form className='d-flex align-items-center justify-content-center' onClick={handleSubmit}>
        <input className='form-control' 
            type="text" 
            placeholder='Task to do' 
            value={value} 
            onChange={(e)=>setValue(e.target.value)} />
        <button className='btn btn-primary' type='Submit'>Add</button>
    </form>
    );
};

export default TodoForm;