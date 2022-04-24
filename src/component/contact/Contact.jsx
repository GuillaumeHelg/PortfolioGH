import React from 'react'
import contact from './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>guillaume.helg@gmail.com</h5>
            <a href="mailto:guillaume.helg@gmail.com" target="_blank">Send an Email</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>guillaume.helg@gmail.com</h5>
            <a href="mailto:guillaume.helg@gmail.com" target="_blank">Send an Email</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>guillaume.helg@gmail.com</h5>
            <a href="mailto:guillaume.helg@gmail.com" target="_blank">Send an Email</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact