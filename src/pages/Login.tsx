import React, { useState } from "react";
import Button from "../components/Button";

type Role = "paciente" | "medico";

const Login: React.FC = () => {
  const [role, setRole] = useState<Role>("paciente");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Tentativa de login como ${role}. (Simulação)`);
  };

  const handleCadastro = () => {
    alert(`Redirecionando para o cadastro de ${role}. (Simulação)`);
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <div className="login-gif-container">
          <img
            src="./assets/apreensivo.gif"
            alt="Pessoa com expressão apreensiva"
          />
        </div>
        <div className="login-form-container">
          <h2 className="form-title">Acesse sua conta</h2>
          <div className="role-toggle">
            <button
              className={`role-btn ${role === "paciente" ? "active" : ""}`}
              onClick={() => setRole("paciente")}
            >
              Sou Paciente
            </button>
            <button
              className={`role-btn ${role === "medico" ? "active" : ""}`}
              onClick={() => setRole("medico")}
            >
              Sou Médico
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" required />
            </div>
            <div className="login-actions">
              <Button text="Entrar" type="primary" />
              <a href="#" onClick={handleCadastro}>
                Não tenho conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
