// import { Home } from 'lucide-react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage'
// import MainHomePage from './components/MainHomePage'
// import Navbar from './components/Navbar'
// import ProfileCard from './components/Profilecard'
import AboutUs from './pages/AboutUs';
// import ServicesPageContent from './components/ServicesPageContent';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';
// import ContactContent from './components/ContactContent';

// import WorkContent from './components/WorkContent';
// import Skills from './components/Skills'
// import Testimonial from './components/Testimonial'
// import Awards from './components/Awards'
// import HirringSection from './components/HirringSection'


function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path={`/`} element={<HomePage />} />
            <Route path={`/about`} element={<AboutUs />} />
            <Route path={`/services`} element={<Services />} />
            <Route path={`/work`} element={<Work />} />
            <Route path={`/contact`} element={<Contact />} />
            

            
          </Routes>
      </Router>
      {/* <Navbar/> */}
      {/* <HomePage/> */}
      {/* <AboutUs /> */}
      {/* <HirringSection /> */}
      {/* <Skills /> */}
      {/* <Testimonial /> */}
      {/* <Awards /> */}
    </>
  )
}

export default App
