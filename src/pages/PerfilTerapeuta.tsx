import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Therapist } from "../types";
import { getTherapistById } from "../mockData";
import Button from "../components/Button";
import AgendamentoModal from "../components/AgendamentoModal";

const PerfilTerapeuta: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [therapist, setTherapist] = useState<Therapist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      const foundTherapist = getTherapistById(Number(id));
      if (foundTherapist) {
        setTherapist(foundTherapist);
      }
    }
  }, [id]);

  if (!therapist) {
    return (
      <div className="page-container container">
        <h1 className="page-title">Terapeuta não encontrado</h1>
      </div>
    );
  }

  return (
    <>
      <div className="page-container container">
        <div className="perfil-container">
          <div className="perfil-header">
            <img src={therapist.image} alt={therapist.name} />
            <div className="perfil-info">
              <h1>{therapist.name}</h1>
              <p>{therapist.specialty}</p>
              <Button
                text="Ver Horários e Agendar"
                type="primary"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
          <div className="perfil-bio">
            <h3>Sobre</h3>
            <p>{therapist.bio}</p>
            <h3>Localização</h3>
            <p>{therapist.location}</p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <AgendamentoModal
          therapist={therapist}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default PerfilTerapeuta;
