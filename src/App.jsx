import "./App.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

const App = () => {
  return <div>
    <section id="Homepage">
    
      <Navbar/>
      <Hero/>
      </section>
      
    <section id="Portfolio">Portfolio</section>
    <section>Portfolio</section>
    <section>Portfolio2</section>
    <section>Portfolio</section>
    <section id="Contact">Contact</section>
    <section id="About">About</section>

  </div>;
};

export default App;
