import React from 'react'
import './about.scss';
import { AnimatedText } from './AnimatedText';

const About = () => {
    return (
        <section id="home">
            <div className="typing-container">
                <h1>Hi, I'm Dimi...</h1>
                <AnimatedText />
            </div>
            <img className="about-pic" src={require('../../assets/cartoondimi-6.png')} alt="dimi" />
        </section>
    )
}

export default About