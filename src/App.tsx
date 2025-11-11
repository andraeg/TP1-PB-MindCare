import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import BuscarTerapeutas from "./pages/BuscarTerapeutas";
import PerfilTerapeuta from "./pages/PerfilTerapeuta";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar" element={<BuscarTerapeutas />} />
        <Route path="/terapeuta/:id" element={<PerfilTerapeuta />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
