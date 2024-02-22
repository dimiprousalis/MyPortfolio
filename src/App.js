import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import { TechStack } from './components/TechStack/TechStack';


function App() {

  return (
    <> 
      <Nav />
      <Home />
      <About/>
      <TechStack />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
