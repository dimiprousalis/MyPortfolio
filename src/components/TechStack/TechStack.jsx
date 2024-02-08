import React from 'react'
import TechStackBox from './TechStackBox';
import Cloud from '../Common/Cloud';


export const TechStack = () => {


    return (
        <>
            <div id="tech-nav"></div>
            <div id="tech-stack">
                <Cloud text="Tech Stack" />
                <div className="tech-main">
                    <TechStackBox title='Languages' section='languages' />
                </div>
                <div className="tech-main">
                    <TechStackBox title='Front End' section='frontEnd' />
                </div>
                <div className="tech-main">
                    <TechStackBox title='Back End' section='backEnd' />
                </div>
                <div className="tech-main">
                    <TechStackBox title='Tools' section='tools' />
                </div>
            </div>
        </>
    )
}
