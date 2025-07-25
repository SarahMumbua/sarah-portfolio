import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaFigma, FaDatabase, FaServer, FaPalette
} from 'react-icons/fa';
import { SiRedux, SiTypescript, SiMongodb } from 'react-icons/si';

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <FaJs />, level: 95 },
        { name: "TypeScript", icon: <SiTypescript />, level: 85 },
        { name: "HTML5", icon: <FaHtml5 />, level: 90 },
        { name: "CSS3/SCSS", icon: <FaCss3Alt />, level: 90 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: <FaReact />, level: 95 },
        { name: "Redux", icon: <SiRedux />, level: 85 },
        { name: "Node.js", icon: <FaNodeJs />, level: 80 },
        { name: "Materialize CSS", icon: <FaPalette />, level: 90 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb />, level: 75 },
        { name: "Figma", icon: <FaFigma />, level: 80 },
        { name: "REST APIs", icon: <FaServer />, level: 85 },
        { name: "SQL Databases", icon: <FaDatabase />, level: 70 }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header center-align">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="highlight">Skills</span>
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
            Technologies I've mastered through years of experience
          </motion.p>
        </div>

        <div className="row">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              className="col s12 m6 l4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="skill-category">
                <h3 className="category-title">{category.title}</h3>
                <motion.div 
                  className="skill-list"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="skill-item"
                      variants={item}
                    >
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-bar-container">
                          <motion.div 
                            className="skill-bar"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                          >
                            <span className="skill-level">{skill.level}%</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;