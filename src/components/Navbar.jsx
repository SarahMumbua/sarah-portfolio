// src/components/Navbar.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import M from 'materialize-css';

const Navbar = ({ activeSection }) => {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <nav>
        <div className="nav-wrapper container">
          <a href="#!" className="brand-logo">Sarah Mumbua</a>
          <a href="#" data-target="mobile-nav" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            {navLinks.map((link) => (
              <motion.li 
                key={link.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={`#${link.id}`} 
                  className={activeSection === link.id ? 'active' : ''}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-nav">
        {navLinks.map((link) => (
          <li key={`mobile-${link.id}`}>
            <a 
              href={`#${link.id}`} 
              className={activeSection === link.id ? 'active' : ''}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;