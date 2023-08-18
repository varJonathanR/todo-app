import React from 'react'
import { useState } from 'react';

export default function ButtonArea() {
    const [allScreen, setAllScreen] = useState(true);
    const [completedScreen, setCompletedScreen] = useState(false);

    const handleAllScreen = () => {
        setAllScreen(true);
        setCompletedScreen(false)
    }
    
    const handleCompleteScreen = () => {
        setAllScreen(false);
        setCompletedScreen(true);
    }

  return (
    <div className='btn-area'>
        <button 
            onClick={handleAllScreen}
            className={allScreen ? "active" : ""}
        >All</button>
        <button 
            onClick={handleCompleteScreen}
            className={completedScreen ? "active" : ""}
        >Completed</button>
    </div>
  )
}
