import React from 'react';
import './services.css';
import {BsCheckSquareFill} from 'react-icons/bs';

const Services = () => {
  return (
     <section id="services">
      <h5>What I Offer</h5>
      <h2 className="section-title">Services</h2>

      <div className="container services__container">

         {/* UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>    

          <ul className="service__list">
            <li>
              <BsCheckSquareFill className="service__list-icon"/>
              <p>Professionelle Gestaltungsfähigkeiten.</p>
            </li>
            <li>
              <BsCheckSquareFill className="service__list-icon"/>
              <p>Kreative Lösungen für Projekte.</p>
            </li>
            <li>
              <BsCheckSquareFill className="service__list-icon"/>
              <p>Kundenvertrauen durch Bilder.</p>
            </li>
            <li>
              <BsCheckSquareFill className="service__list-icon"/>
              <p>Der Charme des Designs.</p>
            </li>
            <li>
              <BsCheckSquareFill className="service__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
            <li>
              <BsCheckSquareFill className="service__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
          </ul>
        </article>

        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>    

          <ul className="service__list">
            <li>
              <BsCheckSquareFill className="service__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheckSquareFill className="service__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheckSquareFill className="service__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheckSquareFill className="service__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheckSquareFill className="service__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
          
            
          </ul>
        </article>

        {/* Content Creation */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>    

          <ul className="service__list">
            <li>
              <BsCheckSquareFill className="service__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheckSquareFill className="service__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheckSquareFill className="service__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheckSquareFill className="service__list-icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services;