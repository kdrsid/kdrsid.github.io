import React from 'react'
import './Contact.css';
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <section id="contact" className="section">
        <h1>Contact Me</h1>
        <h2>Get in touch!</h2>
        <p><FiPhoneCall color='lightgray'/> Phone number: +1 236-258-6381</p>
        <p><IoMailOutline color='lightgray'/> Mail: kris68088@gmail.com</p>
    </section>
  )
}

export default Contact