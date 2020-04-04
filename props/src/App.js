import React from 'react'

import ContactCard from './ContactCard'

function App() {
    return (
        <div className="contacts">
            <div className="contact-card">
                <h1>There will be my content</h1>
            </div>

            <ContactCard 
                contact={{name: "Popy" ,
                image: "./koty/kot1.jpeg" ,
                phone: "(+48) 234 333 123" ,
                email: "Popy@wp.pl"}} 
                
            />
            
            <ContactCard 
                contact={{name: "Zuziek", 
                image: "./koty/kot2.png",
                phone: "(+48) 912 172 218", 
                email: "Zuziek@gail.com"}}
                
            />

            <ContactCard 
                contact={{name:"Marcinos", 
                image:"./koty/kot3.jpg", 
                phone:"(+48)555 116 771", 
                email:"Marcinos@Marcinos.pl"}}
            />

            <ContactCard 
                contact={{name:"Klebek" ,
                image:"./koty/kot4.jpg" ,
                phone:"(+48) 102 103 567" ,
                email:"Klebek@Marcinos.wp.pl"}}
            />
            
        </div>
    )
}

export default App