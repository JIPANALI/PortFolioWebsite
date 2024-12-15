import React from 'react'
import "./ContactSecSection.css"
import ContactPageSocialCard from './ContactPageSocialCard'
import Notification1 from './Notification1'
const ContactSecSection = () => {
  return (
    <div className='ContactSecSection'>
        {/* <h1></h1> */}
        <ContactPageSocialCard/>
        <Notification1/>
    </div>
  )
}

export default ContactSecSection