import React from 'react';
import "./contact.css"
const Contact = () => {
 return(
    <div className="contact">
        <form className='contact-form'>
        <h1> Contact us</h1>
        <label> Name</label>
        <input type= "text" name='name'/>
        <label> Email</label>
        <input type= "text" name='email'/>
        <hr/>
        <label> Message</label>
        <textarea name='message' rows={4}></textarea>
        <hr/>
        <input type='Submit' value='send' />
        </form>  
    </div>
 )
};

export default Contact;