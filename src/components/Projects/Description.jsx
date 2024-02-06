import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Description = (props) => {
    return (
        <div className="description-container">
            {/* <FavoriteIcon
                sx={{
                    height: '120px',
                    width: '120px',
                    color: '#fbd4d4',
                    alignSelf: 'end',
                }} /> */}
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