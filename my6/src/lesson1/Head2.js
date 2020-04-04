import React from 'react'

function Head2 (sek) {

    console.log(sek)

    const date = new Date()
    const hours = date.getHours()
    let dayOfTime

    const styles = {
        fontSize: 40,
        alignItems: "center",
        justifyContent: "center"
    }


    if (hours < 12) {
        dayOfTime = "Morning"
        styles.color = "Purple"
    } else if (hours >= 12 && hours < 17) {
        dayOfTime = "Afternoon"
        styles.color = "Yellow"
    } else {
        dayOfTime = "Night"
        styles.color = "Blue"
    }

    return (
        <div>

            <header style={styles}>Good {dayOfTime} ! </header>
        </div>
    )
        
}

export default Head2