import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Carousel from "./Components/Carousel";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">

        {/* Navbar siempre visible */}
        <Navbar />

        {/* Contenido dinámico según ruta */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contact />} />
          <Route path="/Carrusel" element={<Carousel />} />
          <Route path="/Casa" element={<Home />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
