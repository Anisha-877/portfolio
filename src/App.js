//import './App.css';
import { useEffect } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2100, // Animation duration
      once: false,    // Whether animation should happen only once - while scrolling down
    });
  }, []);
  // ... rest of your component
  

  return (
    <>
    <Nav/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
