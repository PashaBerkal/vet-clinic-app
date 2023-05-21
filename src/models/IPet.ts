export interface Sex {
  sex_id: number;
  sex_name: string;
}

export interface Kind {
  kind_id: number;
  kind_name: string;
}

export interface Breed {
  breed_id?: number;
  breed_name: string;
}
interface Color {
  color_id: number;
  color_name: string;
}
export interface IPet {
  pet_id?: string;
  color?: Color;
  sterilized: boolean;
  sex: Sex;
  birthday: string;
  name: string;
  kind: Kind;
  breed: Breed;
  chip_number?: string;
}

interface DiagnosesType {
  id: number;
  value: string;
}

interface Diagnoses {
  diagnosis_id: number;
  diagnosis_name: string;
  diagnosis_type: DiagnosesType;
}

export interface IPetFullInfo {
  pet_id?: string;
  color?: Color;
  sterilized: boolean;
  sex: Sex;
  birthday: string;
  name: string;
  kind: Kind;
  breed: Breed;
  chip_number?: string;
  pet_diagnoses?: Diagnoses[]
}

export interface PetRequestParams {
  name?: string;
}
export interface PetFullInfoRequestParams {
  petId?: string;
}
