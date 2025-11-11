import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>MindCare</h3>
          <p>Cuidando da sua mente, um dia de cada vez.</p>
        </div>
        <div className="footer-col">
          <h3>Navegação</h3>
          <Link to="/">Home</Link>
          <Link to="/buscar">Encontrar Terapeutas</Link>
          <Link to="/sobre">Sobre Nós</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/login">Entrar / Cadastrar</Link>
        </div>
        <div className="footer-col">
          <h3>Contato</h3>
          <p>SHIN CA 01, Lote A</p>
          <p>Lago Norte, Brasília - DF, 71503-501</p>
          <p>Email: contato@mindcare.com.br</p>
          <p>Telefone: (61) 99694-5155</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>MindCare © 2025. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
