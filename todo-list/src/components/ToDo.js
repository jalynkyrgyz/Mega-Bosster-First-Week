import React from 'react'

const ToDo = ({todo}) => {
  return (
    <div>
        <ol>
            {todo.task} 
        </ol>
       
    </div>
  )
}

export default ToDo