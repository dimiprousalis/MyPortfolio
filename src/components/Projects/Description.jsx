import React from 'react'
import DiamondIcon from '@mui/icons-material/Diamond';

const Description = (props) => {
    return (
        <div className="description-container">
            <DiamondIcon />
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