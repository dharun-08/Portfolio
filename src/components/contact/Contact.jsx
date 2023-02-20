import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kfvxzgo', 'template_fh6omzy', form.current, 'JRPTZMTF4cH6XGvSI')

    e.target.reset()
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Email */}
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dharun08kumar@gmail.com</h5>
            <a href="mailto:dharun08kumar@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          {/* FB Message */}
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>DharunKumar</h5>
            <a href="https://m.me/profile.php?id=100035140442721" target="_blank" rel='noreferrer'>Send a Message</a>
          </article>
          {/* Whatsapp  */}
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>9600621077</h5>
            <a href="https://api.whatsapp.com/send?phone=9600621077" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>
        {/* End Of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Mail' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact