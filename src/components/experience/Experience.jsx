import React from 'react';
import './experience.css';
import {GrNode, GrMysql} from 'react-icons/gr';
import {AiFillHtml5, AiOutlineConsoleSql} from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import {SiSass, SiJavascript, SiBootstrap, SiReact, SiMongodb, SiNeo4J} from 'react-icons/si';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2 className="section-title">My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <FaCss3Alt />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <SiSass />
              <h4>SCSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <SiJavascript />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <SiBootstrap />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <SiReact />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Datenbank Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineConsoleSql />
              <h4>SQL</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <GrMysql />
              <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <SiMongodb />
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <GrNode />
              <h4>NodeJS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <SiNeo4J />
              <h4>Neo4j</h4>
              <small className="text-light">Experienced</small>
            </article>
            
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience;