import React from 'react';
import './contact.css'
import { MdEmail, MdLocationOn, MdPhoneAndroid } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2 className="section-title">Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdLocationOn className="contact__option-icon" />
              <h4>Adress</h4>
              <small>Albstadt Ebingen</small>              
            </article>
            <article className="contact__option">
              <MdPhoneAndroid className="contact__option-icon" />
              <h4>Phone</h4>
              <small>+49 163 926 2582</small>              
            </article>
            <article className="contact__option">
              <CgWebsite className="contact__option-icon" />
              <h4>Website</h4>
              <small>https://bobcoder.netlify.app</small>              
            </article>
            <article className="contact__option">
              <MdEmail className="contact__option-icon" />
              <h4>Email</h4>
              <small>bobomurodj@outlook.de</small>              
            </article>
           
          </div>
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="You Full Name"
              required
            />
            <input type="email" name="email" placeholder="You Email" required />
            <textarea
              name="message"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact;
