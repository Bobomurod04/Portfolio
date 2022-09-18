import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Services from './components/services/Services';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />      
      <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path = "contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
