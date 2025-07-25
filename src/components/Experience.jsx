// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Frontend Developer',
      company: 'Fleelance Consulting.',
      period: '2021 - Present',
      description: 'Leading frontend development for web products.',
      achievements: [
        'Implemented design system used across 3+ products',
        'Improved application performance by 40%',
        'Designed and implemented pixel-perfect UI components with Materialize UI and Tailwind CSS, ensuring cross-browser compatibility and optimal user experience across various devices.'
      ]
    },
    {
      id: 4,
      type: 'education',
      title: 'Sofware Enginering',
      company: 'Moringa School',
      period: '2023',
      description: 'Specialized in software engineering and web technologies.',
      achievements: [
       
        'Capstone project: Healthcare Management System',
        'Participated in multiple hackathons and coding competitions'
      ]
    }
  ];

  // Filter experiences by type
  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const educationExperiences = experiences.filter(exp => exp.type === 'education');

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header center-align">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Work & <span className="highlight">Education</span>
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
            className="section-subtitle"
          >
            My professional journey and educational background
          </motion.p>
        </div>

        <div className="experience-container">
          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="experience-group-title">
              <FaBriefcase className="group-title-icon" />
              Professional Experience
            </h3>
            <div className="experience-group">
              {workExperiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  className={`experience-card ${exp.type}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="experience-icon">
                    <FaBriefcase />
                  </div>
                  <div className="experience-content">
                    <div className="experience-header">
                      <h3 className="experience-title">{exp.title}</h3>
                      <span className="experience-period">{exp.period}</span>
                    </div>
                    <div className="experience-company">{exp.company}</div>
                    <p className="experience-description">{exp.description}</p>
                    <ul className="experience-achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>
                          <span className="achievement-bullet"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="experience-group-title">
              <FaGraduationCap className="group-title-icon" />
              Education
            </h3>
            <div className="experience-group">
              {educationExperiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  className={`experience-card ${exp.type}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="experience-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="experience-content">
                    <div className="experience-header">
                      <h3 className="experience-title">{exp.title}</h3>
                      <span className="experience-period">{exp.period}</span>
                    </div>
                    <div className="experience-company">{exp.company}</div>
                    <p className="experience-description">{exp.description}</p>
                    <ul className="experience-achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>
                          <span className="achievement-bullet"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;  