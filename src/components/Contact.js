import React from 'react'
import Icons from '../assets/values/Icons'

const Contact = () => {


    return (
        <div className="info-pane-content">
            <h1>Contact</h1>
            <a href="mailto:nick.on437@gmail.com" className="contact-entry">
                <img src={Icons.email.logo} alt={Icons.email.alt} />
                nick.on437@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/nick-on/" className="contact-entry">
                <img src={Icons.linkedin.logo} alt={Icons.linkedin.alt} />
                linkedin.com/in/nick-on/
            </a>
            <a href="https://github.com/nickon437" className="contact-entry">
                <img src={Icons.github.logo} alt={Icons.github.alt} />
                github.com/nickon437
            </a>
        </div>
    )
}

export default Contact;
