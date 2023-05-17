import { FC } from 'react';
import Pet from './Pet';
import { IPet } from '../../../../models/IPet';
import classes from './PetsList.module.scss';

interface PetsListProps {
  pets?: IPet[]
}

const PetsList: FC<PetsListProps> = ({ pets }) => (
  <div className={classes.pets}>
    {pets && pets.map((pet: IPet) => (
      <Pet name={pet.name} breed={pet.kind.kind_name} key={pet.pet_id} />
    ))}
  </div>
);

export default PetsList;
