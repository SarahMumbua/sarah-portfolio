// src/components/ThemeToggle.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <motion.div 
      className="theme-toggle"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <button 
        onClick={toggleTheme}
        className={`toggle-btn ${darkMode ? 'dark' : 'light'}`}
        aria-label="Toggle theme"
      >
        <motion.div 
          className="toggle-handle"
          animate={darkMode ? { x: 28 } : { x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {darkMode ? (
            <FaMoon className="moon-icon" />
          ) : (
            <FaSun className="sun-icon" />
          )}
        </motion.div>
      </button>
    </motion.div>
  );
};

export default ThemeToggle;