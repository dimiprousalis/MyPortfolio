import React from 'react';
import './techstack.scss';
import { motion } from 'framer-motion';

const TechStackBox = (props) => {
  const sections = {
    languages: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'Java', icon: 'java' },
    ],
    frontEnd: [
      { name: 'React', icon: 'reactjs' },
      { name: 'Next.js', icon: 'next' },
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css' },
      { name: 'Tailwind', icon: 'tailwind' },
    ],
    backEnd: [
      { name: 'Node', icon: 'node' },
      { name: 'MongoDB', icon: 'mongo' },
      { name: 'MSSQL', icon: 'sql' },
      { name: 'Express', icon: 'expressjs' },
    ],
    tools: [
      { name: 'Android SDK', icon: 'android' },
      { name: 'Jetpack Compose', icon: 'jetpack' },
      { name: 'Git', icon: 'git' },
      { name: 'Docker', icon: 'docker' },
      { name: 'AWS', icon: 'aws' },
    ],
  };

  return (
    <div className="tech-container">
      <div className="diag-title">{props.title}</div>
      <div className="item-container">
        {sections[props.section].map((item, index) => (
          <motion.div
            key={index}
            className="tech-item"
            animate={{ x: [-20, 20, -20], transition: { repeat: Infinity, duration: 5 } }}
          >
            <img src={require(`../../assets/icons/${item.icon}.png`)} alt={item.name} />
            <span>{item.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStackBox;
