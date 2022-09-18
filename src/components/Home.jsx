import React from 'react'
import Header from './header/Header';
import About from './about/About';
import Experience from './experience/Experience';
import Testimonials from './testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Testimonials />
    </div>
  )
}

export default Home;