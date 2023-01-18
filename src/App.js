import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Bmi from "./pages/Bmi";
import Pph21 from "./pages/Pph21";
import Maal from "./pages/Maal";

function App() {
  return (
    <div className="app">
      <div className="brand">CALC REPO</div>
      <nav className="nav">
        <Link to="/" className="nav-item">
          Home
        </Link>

        <Link to="/about" className="nav-item">
          About
        </Link>

        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/pph21" element={<Pph21 />} />
        <Route path="/maal" element={<Maal />} />
      </Routes>
    </div>
  );
}

export default App;
