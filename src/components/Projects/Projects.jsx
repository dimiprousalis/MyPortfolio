import React, { useEffect } from 'react';
import './projects.scss';
import Website from './Website';
import Description from './Description';
import Cloud from '../Common/Cloud';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useProjectAnimation = () => {
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
      ease: [0, 1, 0, 0],
      scale: {
        type: 'spring',
        stiffness: 150,
      },
    },
  },
  hidden: { opacity: 0, scale: .7 },
};

const ProjectItem = ({ project }) => {
  const [ref, controls] = useProjectAnimation();

  return (
    <motion.div key={project.id} ref={ref} animate={controls} initial="hidden" variants={squareVariants}>
      <div className="projects-container">
        <Website
          cartoonImage={project.cartoonImage}
          linkTxt={project.linkTxt}
          color={project.color}
        />
        <Description title={project.title} description={project.description} stack={project.stack} demo={project.demo} github={project.github} />
      </div>
    </motion.div>
  );
};

const projectsData = [
  {
    id: 1,
    title: 'Taste Buds',
    cartoonImage: "https://res.cloudinary.com/dwkg9jctn/image/upload/v1708627022/Portfolio/taste-buds_l8sfre_c_pad_w_400_jucedl.png",
    linkTxt: 'https://taste-budz.netlify.app/',
    color: 'purple',
    description: 'A full stack web application that lets you save recipes',
    stack: 'Tech Stack: JavaScript, React, MongoDB',
    demo: 'https://taste-budz.netlify.app/',
    github: 'https://github.com/dimiprousalis/TasteBuds'
  },
  {
    id: 2,
    title: 'CPA - i',
    cartoonImage: "https://res.cloudinary.com/dwkg9jctn/image/upload/v1708627022/Portfolio/cpai_xqxpn3_c_pad_w_400_qzclz3.png",
    linkTxt: 'https://cpa-i.up.railway.app/',
    color: 'mint',
    description: 'AI Chatbot that answers any of your accounting questions',
    stack: 'Tech Stack: JavaScript, Next.js',
    demo: 'https://cpa-i.up.railway.app/',
    github: 'https://github.com/dimiprousalis/CPA-i'
  },
  {
    id: 3,
    title: 'Good Dimes',
    cartoonImage: "https://res.cloudinary.com/dwkg9jctn/image/upload/v1708627026/Portfolio/good-dimes_fmi8na_c_pad_w_400_gtjarg.png",
    linkTxt: 'https://gooddimes.cyclic.cloud/',
    color: 'blue',
    description: 'A fullstack web application to help you keep track of who owes you money',
    stack: 'Tech Stack: JavaScript, EJS, MongoDB',
    demo: 'https://gooddimes.cyclic.cloud/',
    github: 'https://github.com/dimiprousalis/GoodDimes'
  },
];

const Projects = () => {
  const projectComponents = projectsData.map((project) => <ProjectItem key={project.id} project={project} />);

  return (
    <>
      <div id="projects-nav"></div>
      <div id="projects">
        <Cloud text="Projects" />
        <div className="projects-section">{projectComponents}</div>
      </div>
    </>
  );
};

export default Projects;
