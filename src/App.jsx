
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';


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
    </>
  )
}

export default App
