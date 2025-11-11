import React from "react";
import { Link } from "react-router-dom";
import { Therapist } from "../types";

interface TherapistCardProps {
  therapist: Therapist;
}

const TherapistCard: React.FC<TherapistCardProps> = ({ therapist }) => {
  return (
    <Link to={`/terapeuta/${therapist.id}`} className="card-link">
      <div style={styles.card}>
        <img src={therapist.image} alt={therapist.name} style={styles.image} />
        <div style={styles.content}>
          <h3 style={styles.name}>{therapist.name}</h3>
          <p style={styles.specialty}>{therapist.specialty}</p>
          <p style={styles.location}>{therapist.location}</p>
          <span style={styles.buttonImitation}>Ver Perfil e Horários</span>
        </div>
      </div>
    </Link>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    backgroundColor: "var(--bg-light)",
    borderRadius: "12px",
    boxShadow: "var(--shadow)",
    overflow: "hidden",
    height: "100%",
    color: "var(--text-dark)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  content: {
    padding: "20px",
  },
  name: {
    fontSize: "1.8rem",
    margin: "0 0 5px 0",
    color: "var(--text-dark)",
  },
  specialty: {
    color: "var(--text-dark)",
    margin: "0 0 10px 0",
  },
  location: {
    color: "var(--text-dark)",
    margin: "0 0 15px 0",
    fontSize: "0.9rem",
  },
  buttonImitation: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: "var(--accent-color)",
    color: "var(--text-dark)",
    fontFamily: "var(--font-body)",
  },
};

export default TherapistCard;
