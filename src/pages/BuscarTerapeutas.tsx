import React from "react";
import TherapistCard from "../components/TherapistCard";
import { mockTherapists } from "../mockData";

const BuscarTerapeutas: React.FC = () => {
  return (
    <div className="page-container container">
      <h1 className="page-title">Encontre seu terapeuta</h1>
      <p style={styles.subtitle}>
        Profissionais disponíveis em Brasília e região.
      </p>

      <div style={styles.grid}>
        {mockTherapists.map((therapist) => (
          <TherapistCard key={therapist.id} therapist={therapist} />
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  subtitle: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#000000",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
};

export default BuscarTerapeutas;
