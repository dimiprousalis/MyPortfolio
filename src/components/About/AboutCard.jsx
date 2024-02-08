import React, { useRef } from 'react'
import './about.scss';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import ComputerIcon from '@mui/icons-material/Computer';


const AboutCard = (props) => {

    const cardRef = useRef();
    const showCard = () => {
        cardRef.current.classList.toggle(
            "flipped"
        );
    };

    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'MenuBookIcon':
                return <MenuBookIcon className="main-icon" />;
            case 'ImportantDevicesIcon':
                return <ImportantDevicesIcon className="main-icon" />;
            case 'LocalPizzaIcon':
                return <LocalPizzaIcon className="main-icon" />;
            case 'ComputerIcon':
                return <ComputerIcon className="main-icon" />;
            default:
                return null;
        }
    };

    return (
        <div className="bio" ref={cardRef} onClick={showCard}>
            <div className="header">
                {renderIcon(props.icon)}
                <h2>{props.title}</h2>
                <AdsClickIcon className="animate" sx={{fontSize: 45}}/>
            </div>
            <p>{props.desc1}</p>
            <p>{props.desc2}</p>
        </div>
    )
}

export default AboutCard