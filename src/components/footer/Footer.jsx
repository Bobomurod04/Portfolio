import { useState } from 'react'
import './footer.css'
import { FaInstagram, FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    <footer id="footer">
      <div className="container footer__container">
        <NavLink to = "/" className="logo">
          bob<span>Coder</span>
        </NavLink>

        <ul className="permalinks">
          <li><NavLink to = '/'>Home</NavLink></li>
          <li><NavLink to = '/services'>Services</NavLink></li>
          <li><NavLink to = '/portfolio'>Portfolio</NavLink></li>
          <li><NavLink to = '/contact'>Contact</NavLink></li>
        </ul>
      

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/bobomurod-jabbarov" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/Bobomurod04" target="_blank"><FaGithub /></a>
          <a href="https://facebook.com" target="_blank">
            <FaFacebookF />
          </a>
          <a href="https://instagramm.com" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="footer__copyright">
        <small>Bobomurod Jabbarov 2022 &copy; All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;
