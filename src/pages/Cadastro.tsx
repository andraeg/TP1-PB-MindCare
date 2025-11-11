import React from "react";
import Button from "../components/Button";

const Cadastro: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Funcionalidade de cadastro ainda não implementada.");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Crie sua conta</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome Completo</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" required />
        </div>
        <Button text="Criar Conta" type="primary" />
      </form>
    </div>
  );
};

export default Cadastro;
