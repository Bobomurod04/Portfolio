import React from 'react'
import './header.css'
import ME from '../../assets/me.png';
import CV from '../../assets/cvBob.pdf'
import {BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        <div className="header__container-left">
          <h2>Hallo, Ich bin <br></br><span>Bobomurod Jabbarov</span></h2>
          <div className="animated-text">
            <h3>Programmierer</h3>
            <h3>Web Developer</h3>
            <h3>Frontend Entwickler</h3>
          </div>  
          <div className="cv">
            <a href={CV} download className="btn">
              Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
          <div className="header__socials">
            <a href="https://github.com/Bobomurod04" target="_blank"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/bobomurod-jabbarov" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com" target="_blank"><BsDribbble /></a>
          </div>
        </div>
        
        <div className="header__container-right">
          <div className="me">
            <img src={ME} alt="ME Image" />
          </div>
        </div>
       
      </div>
    </header>
  )
}

export default Header;
