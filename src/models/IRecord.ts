interface Kind {
  kind_id: number;
  kind_name: string;
}

interface Sex {
  sex_id: number;
  sex_name: string;
}

interface Breed {
  breed_id: number;
  breed_name: string;
}

interface Pet {
  pet_id: number;
  color: string;
  sterilized: boolean;
  sex: Sex;
  birthday: number[];
  name: string;
  kind: Kind;
  breed: Breed;
}

export interface IRecord {
  appointment_id: number;
  doctor_name: string;
  date: number[];
  type: string;
  description: string;
  pet: Pet;
}
