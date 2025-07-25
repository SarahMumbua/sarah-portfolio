// // src/components/Hero.jsx
// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Typed from 'typed.js';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// const Hero = ({ darkMode }) => {
//   useEffect(() => {
//     const typed = new Typed('#typed-text', {
//       strings: [
//         "Frontend Developer",
//         "Fullstack Engineer",
//         "React Specialist",
//         "UI/UX Enthusiast"
//       ],
//       typeSpeed: 50,
//       backSpeed: 30,
//       backDelay: 2000,
//       loop: true
//     });

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <section id="home" className="hero-section">
//       <div className="hero-background">
//         <div className="gradient-overlay"></div>
//       </div>
      
//       <div className="container">
//         <motion.div 
//           className="hero-content"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div 
//             className="hero-image"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ 
//               type: "spring", 
//               stiffness: 260, 
//               damping: 20 
//             }}
//           >
//             <div className="profile-image"></div>
//           </motion.div>
          
//           <motion.h1 
//             className="hero-title"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             Sarah <span className="highlight">Mumbua</span>
//           </motion.h1>
          
//           <motion.div 
//             className="hero-subtitle"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             <span id="typed-text" className="typed-text"></span>
//           </motion.div>
          
//           <motion.div 
//             className="hero-description"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             Building elegant solutions to complex problems with modern web technologies
//           </motion.div>
          
//           <motion.div 
//             className="hero-cta"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//           >
//             <a 
//               href="#contact" 
//               className="btn btn--large btn--primary"
//             >
//               Hire Me
//             </a>
//             <a 
//               href="/resume.pdf" 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn btn--large btn--secondary"
//             >
//               View Resume
//             </a>
//           </motion.div>
          
//           <motion.div 
//             className="social-links"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.2, duration: 0.8 }}
//           >
//             <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//               <FaGithub />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <FaLinkedin />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <FaTwitter />
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>
      
//       <motion.div 
//         className="scroll-indicator"
//         initial={{ opacity: 0 }}
//         animate={{ 
//           opacity: [0, 1, 0],
//           y: [0, 10, 0]
//         }}
//         transition={{ 
//           repeat: Infinity, 
//           duration: 1.5 
//         }}
//       >
//         <div className="mouse">
//           <div className="wheel"></div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;