import React from 'react'

const Description = (props) => {
    return (
        <div className="description-container">
            <div className="text-box">
                <div className="title">{props.title}</div>
                <div className="desc">{props.description}</div>
                <div className="stack">{props.stack}</div>
                <div className="site-links">
                    <a href={props.demo}>Live Site</a>
                    <a href={props.github}>GitHub</a>
                </div>
            </div>
        </div>

    )
}

export default Description