import { Therapist } from "./types";

export const mockTherapists: Therapist[] = [
  {
    id: 1,
    name: "Dra. Ana Silva",
    specialty: "Ansiedade e Depressão",
    image: "./assets/medico-1.jpg",
    location: "Asa Sul, Brasília",
    bio: "Psicóloga com 10 anos de experiência, focada em Terapia Cognitivo-Comportamental para adultos e adolescentes.",
    availableSlots: [
      { id: "t1-1", time: "14:00 - 14:50", available: true },
      { id: "t1-2", time: "15:00 - 15:50", available: false },
      { id: "t1-3", time: "16:00 - 16:50", available: true },
    ],
  },
  {
    id: 2,
    name: "Dr. Heitor Neto",
    specialty: "Terapia de Casal",
    image: "./assets/medico-2.jpg",
    location: "Águas Claras, Brasília",
    bio: "Especialista em relacionamentos e dinâmica familiar. Ajuda casais a encontrar um novo caminho.",
    availableSlots: [
      { id: "t2-1", time: "09:00 - 09:50", available: true },
      { id: "t2-2", time: "10:00 - 10:50", available: true },
      { id: "t2-3", time: "11:00 - 11:50", available: false },
    ],
  },
];

export const getTherapistById = (id: number): Therapist | undefined => {
  return mockTherapists.find((t) => t.id === id);
};
