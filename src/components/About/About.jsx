import React from 'react'
import Cloud from '../Common/Cloud'
import './about.scss';
import AboutCard from './AboutCard';


const aboutData = [
    {
        id: 1,
        title: "I'm a self-taught software engineer",
        desc1: "I appreciate all things logic, brain teasers, and puzzles.", 
        desc2: "I began teaching myself how to code and immediately fell in love... So much so that I left my previous career to pursue programming full time.",
        icon: "ComputerIcon",
    },
    {
        id: 2,
        title: 'To say I love learning is an understatement',
        desc1: "I have 3 Bachelor's Degrees in Economics, Accounting, and Business Administration with a dual emphasis in Real Estate and Finance.",
        desc2: "I spent several years working in the finance realm before transitioning to engineering...",
        icon: "MenuBookIcon",
    },
    {
        id: 3,
        title: "Full Stack Web and Mobile Developer",
        desc1: "I have spent the past couple of years building full stack web development projects.",
        desc2: "Over the past year I have also been working part-time as an Android mobile developer at a start-up.",
        icon: "ImportantDevicesIcon",
    },
    {
        id: 4,
        title: "I love pizza and bourbon",
        desc1: "This doesn't have much to do with anything but I'm really passionate about pizza and bourbon...",
        desc2: "I make an amazing Detroit style Pizza and have way too many batches of Booker's in my bourbon collection.",
        icon: "LocalPizzaIcon",
    },
];

const About = () => {

    const aboutComponents = aboutData.map((about) => <AboutCard key={about.id} title={about.title} desc1={about.desc1} desc2={about.desc2} icon={about.icon} />);

    return (
        <div id="about">
            <Cloud text="About Me" />
            <div className="bio-container">
                {aboutComponents}</div>
        </div>
    );
};
export default About

