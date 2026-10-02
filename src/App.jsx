import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Support from "./components/Support";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="hero-shell">
        <Navbar />
        <Hero />
      </div>
      <main>
        <Clients />
        <Support />
        <Features />
        <Benefits />
        <Pricing />
        <Testimonial />
      </main>

      <Footer />
    </div>
  );
}

export default App;
