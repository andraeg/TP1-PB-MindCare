export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface Therapist {
  id: number;
  name: string;
  specialty: string;
  image: string;
  bio: string;
  location: string;
  availableSlots: TimeSlot[];
}
