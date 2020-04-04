import React from 'react'

function ContactCard(props) {

    console.log("Log1: ")
    console.log(props.contact)
    let myJSobject = {nan: "bug", ti: "tasf"}
    console.log("Log2: ")
    console.log(myJSobject)

    return (
        <div className="contact-card">
            <img src={props.contact.image}></img>
            <div className="info">
                <h3>{props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
        </div>
    )

}

export default ContactCard