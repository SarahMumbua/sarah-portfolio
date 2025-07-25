// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for e-commerce platforms with real-time analytics and inventory management.",
      tags: ["React", "Redux", "Materialize CSS", "Node.js"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 2,
      title: "Health Tracker App",
      description: "Mobile-first health tracking application with personalized insights and goal setting features.",
      tags: ["React Native", "Firebase", "Redux Toolkit"],
      category: "mobile",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 3,
      title: "Portfolio Builder",
      description: "Interactive portfolio builder with customizable templates and drag-and-drop interface.",
      tags: ["React", "Framer Motion", "CSS3"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 4,
      title: "Real Estate Platform",
      description: "Full-featured real estate listing platform with advanced search and virtual tours.",
      tags: ["React", "Node.js", "MongoDB", "Mapbox"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 5,
      title: "Finance Dashboard",
      description: "Data visualization dashboard for financial analytics with interactive charts and reports.",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 6,
      title: "Task Management System",
      description: "Collaborative task management application with real-time updates and notifications.",
      tags: ["React", "Socket.io", "MongoDB", "Materialize CSS"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header center-align">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
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
            My recent work that showcases my skills and expertise
          </motion.p>
        </div>

        <div className="filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setActiveFilter('fullstack')}
          >
            Fullstack
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveFilter('mobile')}
          >
            Mobile
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className={`project-color-bg project-${project.id}`}></div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;