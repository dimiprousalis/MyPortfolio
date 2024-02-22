import React from 'react'
import './home.scss';
import { AnimatedText } from './AnimatedText';

const Home = () => {
    return (
        <>
            <div id="home-nav"></div>
            <section id="home">
                <div className="typing-container">
                    <h1>Hi, I'm Dimi...</h1>
                    <AnimatedText />
                </div>
                <img className="home-pic" src="https://res.cloudinary.com/dwkg9jctn/image/upload/v1708624372/my-portfolio/cartoondimi-6_lac2rd.png" alt="dimi" />
            </section>
        </>
    )
}

export default Home