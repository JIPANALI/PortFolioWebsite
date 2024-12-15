import React from 'react'
import "./ContactMeSection.css"
import ContactMe from './ContactMe'
const ContactMeSection = () => {
  return (
    <div className='ContactMeSection'>
        <div className='ContactMeSectionContainer'>
            {/* <h1>Let’s work together</h1> */}
            <p>Get in Touch</p>
            <h1>Have a project in mind?</h1>
            <p>If you have a website or mobile app idea in mind or you need some advice about product design, feel free to contact me. Currently my time books</p>
            <ContactMe/>
        </div>
    </div>
  )
}

export default ContactMeSection