import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Saved from "./Pages/Saved";
import ContactUs from "./Pages/ContactUs";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [saved, setSaved] = useState([]);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/saved" element={<Saved saved={saved} />} />
          <Route
            path="/clothes/:id"
            element={<Card setSaved={setSaved} saved={saved} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
