// src/components/Contact.jsx
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formRef.current,
      'YOUR_USER_ID'
    ).then(
      (result) => {
        setFormStatus({ type: 'success', message: 'Message sent successfully!' });
        formRef.current.reset();
      },
      (error) => {
        setFormStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header center-align">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In <span className="highlight">Touch</span>
          </motion.h2>
          <motion.div 
            className="divider"
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Have a project in mind? Let's work together
          </motion.p>
        </div>

        <div className="row">
          <motion.div 
            className="col s12 m6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>I'm currently available for freelance work or full-time positions. Feel free to reach out!</p>
              
              <div className="contact-methods">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="material-icons">email</i>
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <a href="mailto:mumbuasarah2030@gmail.com">mumbuasarah2030@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaWhatsapp />
                  </div>
                  <div className="contact-details">
                    <h4>WhatsApp</h4>
                    <a href="https://wa.me/+254710142884">+254710142884</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="material-icons">location_on</i>
                  </div>
                  <div className="contact-details">
                    <h4>Location</h4>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="col s12 m6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="input-field">
                <input id="name" type="text" name="name" className="validate" required />
                <label htmlFor="name">Full Name</label>
              </div>
              
              <div className="input-field">
                <input id="email" type="email" name="email" className="validate" required />
                <label htmlFor="email">Email Address</label>
              </div>
              
              <div className="input-field">
                <textarea id="message" name="message" className="materialize-textarea" required></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              
              <motion.button
                className="btn waves-effect waves-light"
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <FaPaperPlane className="right" />
              </motion.button>
              
              {formStatus && (
                <div className={`form-feedback ${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;