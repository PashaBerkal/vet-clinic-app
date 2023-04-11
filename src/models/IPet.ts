export type Kind = {
  kind_id: number;
  kind_name: string;
};

export interface IPet {
  pet_id: number;
  name: string;
  kind: Kind;
  sterilized: boolean;
}
