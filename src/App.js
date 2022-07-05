import './App.css';
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import About from './components/about/About';
// import Testimonials from "./components/testimonials/Testimonials"
// import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <Nav /> 
      <Hero /> 
      <About /> 
      {/*
      <Testimonials />
      <Contact /> */}
    </>

  );
}

export default App;
