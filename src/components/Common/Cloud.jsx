import React from 'react'
import './cloud.scss';

const Cloud = (props) => {
    return (

        <div className="cloud-container">
            <img src="https://res.cloudinary.com/dwkg9jctn/image/upload/v1708627024/Portfolio/cloud_fheihh_c_pad_w_350_o2cnhe.png" alt="cloud" />
            <div className="cloud-text">{props.text}</div>
        </div>
    )
}

export default Cloud