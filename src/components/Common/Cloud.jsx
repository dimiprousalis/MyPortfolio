import React from 'react'
import './cloud.scss';

const Cloud = (props) => {
    return (

        <div className="cloud-container">
            <img src="https://res.cloudinary.com/dwkg9jctn/image/upload/v1708624600/my-portfolio/cloud_fheihh.png" alt="cloud" />
            <div className="cloud-text">{props.text}</div>
        </div>
    )
}

export default Cloud