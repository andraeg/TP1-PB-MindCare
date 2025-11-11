import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home: React.FC = () => {
  return (
    <div className="home-background">
      <div className="home-content">
        <h1 className="home-title">Cuide da sua mente.</h1>
        <p className="home-subtitle">
          Encontre o profissional ideal para sua jornada de bem-estar.
        </p>
        <Link to="/buscar">
          <Button text="Agendar uma consulta" type="primary" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
