import { useRef } from "react";
import './nav.scss';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <div className="nav-container">
            <div className="logo">
               <span> Dimi</span>
                <a href="https://www.linkedin.com/in/dimitraprousalis/"><LinkedInIcon sx={{ fontSize: 40 }} />
                </a>
                <a href="https://github.com/dimiprousalis"><GitHubIcon sx={{ fontSize: 40 }} />
                </a>

            </div>
            <nav ref={navRef}>
                <a href="#home">Home</a>
                <a href="#about">About Me</a>
                <a href="#tech-stack">Tech Stack</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="nav-btn">
                <MenuIcon
                    sx={{ fontSize: 40 }}
                    onClick={showNavbar} />
            </div>
        </div >
    );
}

export default Navbar;