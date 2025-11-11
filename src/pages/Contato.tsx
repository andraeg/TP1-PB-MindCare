import React from "react";

const Contato: React.FC = () => {
  const numeroWhatsApp = "5561999998888";
  const mensagem = "Olá! Gostaria de saber mais sobre o MindCare.";

  return (
    <div className="page-container container">
      <div className="contato-container">
        <h1 className="page-title">Entre em Contato</h1>
        <p>
          Tem alguma dúvida ou sugestão? Fale conosco! Estamos prontos para
          ajudar.
        </p>
        <a
          href="https://wa.me/5561996945155"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale Comigo no WhatsApp
        </a>
        <div className="contato-info">
          <h3>Nossas Informações</h3>
          <p>
            <strong>Endereço:</strong> SHIN CA 01, Lote A, Lago Norte, Brasília
            - DF, 71503-501
          </p>
          <p>
            <strong>Email:</strong> contato@mindcare.com.br
          </p>
          <p>
            <strong>Telefone:</strong> (61) 99694-5155
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contato;
