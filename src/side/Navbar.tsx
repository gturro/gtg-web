import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';

function Navbar() {
    
    useEffect(() => {
        const navbarLinks = document.querySelectorAll("#navbar li");
        navbarLinks.forEach((link, index) => {
            anime({
                targets: link,
                translateX: [-300, 0],
                opacity: [0, 1],
                duration: 2000,
                delay: index * 250,
                easing: 'easeOutExpo'
            });
            link.addEventListener("mouseenter", () => {
                anime({
                  targets: link,
                  translateX: "2px",
                  duration: 100,
                  easing: "linear"
                });
              });
            
            link.addEventListener("mouseleave", () => {
            anime({
                targets: link,
                translateX: "0px",
                duration: 100,
                easing: "easeOutCubic"
            });
            });
        });
    }, []);
    
    
    return (
        <ul id="navbar">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/experience">Experience</NavLink>
            </li>
            <li>
                <NavLink to="/archive">Archive</NavLink>
            </li>
           {/*  <li>
                <NavLink to="/capsules">Capsules</NavLink>
            </li> */}
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    )
}

export default Navbar;