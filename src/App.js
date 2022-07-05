import './App.css';
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import About from './components/about/About';
import Services from "./components/services/Services"
// import Testimonials from "./components/testimonials/Testimonials"
// import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <Nav /> 
      <Hero /> 
      <About /> 
      <Services/>
      {/*
      <Testimonials />
      <Contact /> */}
    </>

  );
}

export default App;
