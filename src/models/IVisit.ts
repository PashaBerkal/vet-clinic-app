interface Sex {
  sex_id: number;
  sex_name: string;
}

interface Kind {
  kind_id: number;
  kind_name: string;
}

interface Breed {
  breed_id: number;
  breed_name: string;
}

interface Pet {
  pet_id: number;
  sterilized: boolean;
  sex: Sex;
  birthday: string;
  name: string;
  kind: Kind;
  breed: Breed;
}

export interface IMainRecord {
  appointment_id: number;
  doctor_name: string;
  date: string;
  type: string;
  description: string;
  pet: Pet;
}

interface Diagnoses {
  diagnosis_id: 'integer';
  diagnosis_name: 'string';
  diagnosis_type: {
    id: 'integer';
    value: 'String';
  };
}

export interface IVisit {
  date: string;
  diagnoses: Diagnoses[];
  pet: Pet;
  type: string;
  visit_id: number;
}

export interface MainRecordRequestParams {
  maxCount?: number;
  petId?: string;
}
