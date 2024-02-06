import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Nav';
import Projects from './components/Projects/Projects';
import { TechStack } from './components/TechStack/TechStack';


function App() {

  return (
    <> 
      <Nav />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
