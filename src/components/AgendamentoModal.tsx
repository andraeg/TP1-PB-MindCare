import React from "react";
import { Therapist } from "../types";
import Button from "./Button";

interface AgendamentoModalProps {
  therapist: Therapist | null;
  onClose: () => void;
}

const AgendamentoModal: React.FC<AgendamentoModalProps> = ({
  therapist,
  onClose,
}) => {
  if (!therapist) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 style={styles.title}>{therapist.name}</h2>
        <p style={styles.specialty}>{therapist.specialty}</p>
        <p style={styles.bio}>{therapist.bio}</p>

        <h3 style={styles.subTitle}>Horários disponíveis</h3>
        <div style={styles.slotsContainer}>
          {therapist.availableSlots.map((slot) => (
            <Button
              key={slot.id}
              text={slot.time}
              type={slot.available ? "primary" : "secondary"}
              disabled={!slot.available}
              onClick={() => {
                if (slot.available) {
                  alert(
                    `Consulta agendada com ${therapist.name} às ${slot.time}!`
                  );
                  onClose();
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  title: {
    color: "var(--primary-color)",
    margin: "0 0 10px 0",
    fontSize: "2.5rem",
  },
  specialty: {
    fontWeight: "bold",
    color: "var(--text-dark)",
    margin: "0 0 15px 0",
  },
  bio: {
    lineHeight: 1.6,
    margin: "0 0 20px 0",
  },
  subTitle: {
    borderBottom: "1px solid var(--secondary-color)",
    paddingBottom: "5px",
    marginBottom: "15px",
    fontSize: "1.8rem",
    color: "var(--text-dark)",
  },
  slotsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
};

export default AgendamentoModal;
