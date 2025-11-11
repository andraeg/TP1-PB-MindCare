import React from "react";

const Sobre: React.FC = () => {
  return (
    <div className="page-container container">
      <h1 className="page-title">Nossa Trajetória</h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 40px auto",
          fontSize: "1.1rem",
        }}
      >
        A MindCare nasceu da necessidade de simplificar o acesso à saúde mental,
        conectando pacientes a profissionais de forma segura e empática.
      </p>

      <div className="timeline">
        <div className="timeline-item">
          <h3>2023 - A Ideia</h3>
          <p>
            Percebemos a dificuldade de pacientes em encontrar terapeutas
            compatíveis e a burocracia enfrentada por profissionais. O conceito
            do MindCare começa a ser desenhado.
          </p>
        </div>
        <div className="timeline-item">
          <h3>2024 - O Desenvolvimento</h3>
          <p>
            Montamos uma equipe e iniciamos o desenvolvimento da plataforma,
            focando em segurança, privacidade e uma interface intuitiva como
            pilares centrais.
          </p>
        </div>
        <div className="timeline-item">
          <h3>2025 - O Lançamento</h3>
          <p>
            Lançamos nossa plataforma, prontos para transformar a experiência
            terapêutica digital e facilitar o cuidado com a saúde mental para
            milhares de pessoas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
