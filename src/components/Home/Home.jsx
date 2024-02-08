import React from 'react'
import './home.scss';
import { AnimatedText } from './AnimatedText';

const Home= () => {
    return (
        <section id="home">
            <div className="typing-container">
                <h1>Hi, I'm Dimi...</h1>
                <AnimatedText />
            </div>
            <img className="home-pic" src={require('../../assets/cartoondimi-6.png')} alt="dimi" />
        </section>
    )
}

export default Home