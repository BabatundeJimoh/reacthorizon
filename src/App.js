import logo from "./logo.svg";
import "./App.css";
import "./Navbar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Plans from "./Plans";
import Cards from "./Cards";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Plans />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
