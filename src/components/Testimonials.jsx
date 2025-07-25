// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = ({ darkMode }) => {
  const testimonials = [
    {
      id: 1,
      name: "John Kamau",
      position: "CTO, Tech Solutions Africa",
      content: "Sarah delivered our e-commerce platform ahead of schedule. Her React expertise and attention to detail resulted in a 30% increase in conversion rates.",
      rating: 5
    },
    {
      id: 2,
      name: "Aisha Mohamed",
      position: "Product Manager, Fintech Ltd",
      content: "Working with Sarah was a game-changer for our mobile banking app. She transformed complex requirements into an intuitive user experience.",
      rating: 5
    },
    {
      id: 3,
      name: "David Ochieng",
      position: "Startup Founder",
      content: "Sarah built our MVP from scratch with limited resources. Her technical skills and problem-solving abilities exceeded our expectations.",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header center-align">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client <span className="highlight">Testimonials</span>
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
            What people I've worked with say about me
          </motion.p>
        </div>

        <div className="row">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="col s12 m4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`testimonial-card ${darkMode ? 'dark' : ''}`}>
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={i < testimonial.rating ? 'star filled' : 'star'}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="client-info">
                  <h4 className="client-name">{testimonial.name}</h4>
                  <p className="client-position">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;