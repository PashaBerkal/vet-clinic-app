export interface Sex {
  sex_id: number;
  sex_name: string;
}

export interface Kind {
  kind_id: number;
  kind_name: string;
}

export interface Breed {
  breed_id: number;
  breed_name: string;
}

export interface IPet {
  pet_id: number;
  color: string;
  sterilized: boolean;
  sex: Sex;
  birthday: string;
  name: string;
  kind: Kind;
  breed: Breed;
}
