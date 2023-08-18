import React, { useState } from 'react'
import Checkbox from './Checkbox';
import { BsFillTrash3Fill } from "react-icons/bs";

export default function TaskList({ name, done, onToggle, onTrash, onRename }) {
    const [editMode, setEditMode] = useState(false);

  return (
    <div className='todo-list-item'>
        <div className={'todo-list-item-task ' + (done ? "done" : "")}>
            <Checkbox checked={done} onClick={() => onToggle(!done)} />
            {!editMode && (
                <span onClick={() => setEditMode(prev => !prev)}>{name}</span>
            )}
            {editMode && (
                <form onSubmit={ev => {
                    ev.preventDefault();
                    setEditMode(false);
                }}>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={ev => onRename(ev.target.value)} 
                    />
                </form>
            )}
        </div>
        <div className="todo-list-item-icons">
            <BsFillTrash3Fill onClick={onTrash} size={25} className='trash' />
        </div>
    </div>
  )
}
