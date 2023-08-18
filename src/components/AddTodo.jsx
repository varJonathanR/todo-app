import React, { useState } from 'react'

export default function AddTodo({ onAdd }) {
  const [todoName, setTodoName] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onAdd(todoName);
    setTodoName("");
  };

  return (
    <div>
        <form onSubmit={handleSubmit} className='todo-input'>
            <input 
                type="text" 
                value={todoName}
                onChange={e => setTodoName(e.target.value)} 
                placeholder='Add new task' 
            />
            <button className='primaryBtn'>Add</button>
        </form>
    </div>
  )
}
