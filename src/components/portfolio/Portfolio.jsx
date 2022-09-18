import React from 'react';
import './portfolio.css';
import {portfolios} from '../../data';


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2 className="section-title">Portfolio</h2>

      <div className="container portfolio__container">
        {
          portfolios.map(({id, image, title, github, demo}) => {
            return (
              <article key = {id} className="portfolio__item">
                <img src = {image} alt={title} className="portfolio__item-image"/>
                
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} target="_blank" className="btn">GitHub</a>
                  <a href={demo} target="_blank" className="btn btn-primary">Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio;