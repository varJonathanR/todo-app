import React, { useState } from 'react'
import { FaRegSquare, FaSquareCheck } from "react-icons/fa6"

export default function Checkbox({ checked = false, onClick }) {

  return (
    <div className='checkbox' onClick={onClick}>
        {!checked && (
            <div className="unchecked">
                <FaRegSquare size={20} />
            </div>
        )}
        {checked && (
            <div className="checked">
                <FaSquareCheck size={20} />
            </div>
        )}
    </div>
  )
}
