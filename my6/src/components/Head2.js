import React from 'react'

function Head2 (sek) {

    console.log(sek)

    const date = new Date()
    const hours = date.getHours()
    let dayOfTime

    if (hours < 12) {
        dayOfTime = "Morning"
    } else if (hours >= 12 && hours < 17) {
        dayOfTime = "Afternoon"
    } else {
        dayOfTime = "Night"
    }

    return (
        <div>

            <header className="nav1">Good {dayOfTime} ! </header>
        </div>
    )
        
}

export default Head2