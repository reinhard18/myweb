import Test from "./Test";
import "./App.scss"
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      </section>
    <section id="Portfolio">Portfolio</section>
    <section>Portfolio</section>
    <section>Portfolio2</section>
    <section>Portfolio</section>
    <section id="Contact">Contact</section>
    <section id="About">About</section>
    <Test/>
  </div>;
};

export default App;
