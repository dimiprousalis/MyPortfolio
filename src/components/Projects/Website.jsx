import React from 'react'
import './projects.scss';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RefreshIcon from '@mui/icons-material/Refresh';

const Website = (props) => {

    return (
        <div className={`box-container ${props.color}`}>
            <div className="box-1"></div>
            <div className="box-2">
                <ArrowBackIcon sx={{ color: 'grey' }} />
                <ArrowForwardIcon sx={{ color: 'grey' }} />
                <RefreshIcon sx={{ color: 'grey' }} />
                <p className="link-bar">{props.linkTxt} <StarIcon sx={{ color: '#FCD400' }} /> </p>

            </div>
            <div className={`box-3 ${props.color}`}>
                <img className="website-pic" src={props.cartoonImage} alt="taste buds"
                    onMouseOver={e => (e.currentTarget.src = props.realImage)}
                    onMouseOut={e => (e.currentTarget.src = props.cartoonImage)} />
            </div>
        </div>
    )
}

export default Website