// src/components/Footer.jsx
import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <h5>Sarah Mumbua</h5>
            <p>Frontend & Fullstack Developer creating beautiful, functional web experiences</p>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">
                <FaCodepen />
              </a>
            </div>
          </div>
          <div className="col s12 m6">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © {currentYear} Sarah Mumbua. All rights reserved.
          <span className="right">
            Developed by Sarah Mumbua Using React
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;