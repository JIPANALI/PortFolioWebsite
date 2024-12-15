import React from 'react'
import { useNavigate } from 'react-router-dom'
import ContactButton1 from './ContactButton1'

const ContactMe = () => {
    const navigate=useNavigate()
    const  ClickNavigate=()=>{
        navigate("/contact")}
    
  return (
    <div>
        <ContactButton1 onClick={ClickNavigate}/>
    </div>
  )
}

export default ContactMe