import React from 'react'

import ToDoItem from './ToDoItem'

function App2 () {

    return (
        <div className="todo-list">


            <h1 style={{fontSize: 40}}>This is easy!</h1>

            <h1 style={{fontSize: 40}}>Leave a note:</h1>

            <ToDoItem />

            <ToDoItem />

            <ToDoItem />

            <ToDoItem />
            
            <a href="http://google.com">Here u have a link to Oncle!</a>

        </div>
    )
}

export default App2