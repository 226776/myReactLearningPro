import React from 'react'

import ToDoItem from './ToDoItem'

function App2 () {

    return (
        <div className="todo-list">
            <h1 style={{fontSize: 40}}>This is easy!</h1>

            <ToDoItem />

            <ToDoItem />

            <ToDoItem />

            <ToDoItem />
            

        </div>
    )
}

export default App2