/* eslint-disable no-shadow */
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
  status: string;
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

export interface IVisit {
  date: string;
  diagnoses: Diagnoses[];
  pet: Pet;
  type: string;
  visit_id: number;
  prescription: string;
  anamnesis: string;
  recommendation: string;
}

export interface IVisitHistory {
  date: string;
  diagnoses: Diagnoses[];
  pet: Pet;
  type: string;
  visit_id: number;
  prescription: string;
  anamnesis: string;
  recommendation: string;
  weight: string;
  breath_beat: string;
  heart_beat: string;
  first_visit_id?: number;
}

export interface MainRecordRequestParams {
  maxCount?: number;
  petId?: string;
}

export interface IVisitHistoryRecordRequestParams {
  visitId?: string;
}
export interface IFreeTimeRecordRequestParams {
  doctorId?: number;
  date: Date | string | null;
}
export interface IFreeTimeRecordResponceParams {
  free_time?: Array<string>;
}

type SurgeonsItem = {
  id: number;
  category: {
    id: number;
    value: string;
  };
  name: string;
};

export type ISurgeonsResponceParams = Array<SurgeonsItem>;

export enum ProcedureType {
  NotSelected = '',
  Ultrasound = 'ULTRASOUND',
  Surgeon = 'SURGEON',
}

export type SelectedProcedureType =
ProcedureType.NotSelected
| ProcedureType.Surgeon
| ProcedureType.Ultrasound;

export interface AppointmentRequestParams {
  pet_id: number;
  date: string;
  surgeon_id: number;
  type: SelectedProcedureType;
}
