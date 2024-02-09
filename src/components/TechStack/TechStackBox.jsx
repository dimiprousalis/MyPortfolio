import React, { useEffect } from 'react';
import './techstack.scss';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useTechAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return [ref, controls];
};

const squareVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      scale: {
        type: 'fade',
        duration: 1,
      },
    },
  },
  hidden: { opacity: 0, scale: 0 },
};

const TechStackBox = (props) => {

  const [ref, controls] = useTechAnimation();

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
             className="tech-item" 
             key={item.name} 
             ref={ref} animate={controls} initial="hidden" variants={squareVariants} 
             >
            <img src={require(`../../assets/icons/${item.icon}.png`)} alt={item.name} />
            <p>{item.name}</p>
            </motion.div>
         
        ))}
      </div>
    </div>
  );
};

export default TechStackBox;
