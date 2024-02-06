import React from 'react'
import './cloud.scss';

const Cloud = (props) => {
    return (

        <div className="cloud-container">
            <img src={require('../../assets/cloud.png')} alt="cloud" />
            <div className="cloud-text">{props.text}</div>
        </div>
    )
}

export default Cloud