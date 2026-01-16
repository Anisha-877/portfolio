import React, { useRef } from 'react'
import './Nav.css'
import {Link} from "react-scroll"
//import { useGSAP } from '@gsap/react';
//import { gsap } from "gsap";
export default function Nav() {
    let menu=useRef();
    let mobile=useRef();
    return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul className='desktopMenu'>
            <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
            <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>
            <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500}><li>Projects</li></Link>
            <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500}><li>Contact</li></Link>
        </ul>
        <div className='hamBurger' ref={menu} onClick={()=>{
            mobile.current.classList.toggle('openMenu');
            menu.current.classList.toggle('activeHam');
        }}>
            <div className='ham'></div>
            <div className='ham'></div>
            <div className='ham'></div>
        </div>

        <ul className='mobileMenu' ref={mobile}>
            <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
            <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>
            <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500}><li>Projects</li></Link>
            <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500}><li>Contact</li></Link>
        </ul>
    </nav>
  )
}
