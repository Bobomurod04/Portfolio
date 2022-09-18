import React from 'react'
import './about.css'
import ME from '../../assets/about-me.png';
import { FaAward } from 'react-icons/fa'
import { AiOutlineUsergroupAdd, AiOutlineProject } from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2 className="section-title">About Me</h2>
      

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Jahre </small>
            </article>

            <article className="about__card">
              <AiOutlineUsergroupAdd className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Weltweit</small>
            </article>

            <article className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Project</h5>
              <small>30+ Complete</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus asperiores praesentium totam possimus nam blanditiis
            dicta commodi minus quia debitis. Lorem ipsum dolor sit amet.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About;
