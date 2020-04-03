import React from 'react'

function MainContent () {

    return (
        <div>
            <ul>
                <li className="myList">This is my list of content</li>
                <li>Nothing here...</li>
                <li className="myList">I'm just learning</li>
            </ul>
            <input defaultValue="Something!" className="myList" />
            <input type="checkbox"></input>
            <input type="checkbox" className="myList"/>
            <p>CheckBoxes</p>
        </div>
    )
        
}

export default MainContent