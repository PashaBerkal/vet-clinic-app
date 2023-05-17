import React, { FC } from 'react';
import { ReactComponent as Paw } from '../assets/Paw.svg';
import classes from './Pet.module.scss';
import DataPet from './DataPet/DataPet';

interface PetProps {
  name: string,
  birthday: string,
  animal: string,
  sex: string,
  color?: string,
  chip: number,
  breed: string,
}

const Pet: FC<PetProps> = ({ name, animal, birthday, chip, color, sex, breed }) => (
  <div className={classes.Pet}>
    <div className={classes.main}>
      <div className={classes.img}>
        <Paw />
      </div>
      <div className={classes.name}>
        {name}
      </div>
      <div className={classes.breed}>
        {breed}
      </div>
    </div>
    <DataPet
      animal={animal}
      birthday={birthday}
      chip={chip}
      color={color}
      sex={sex}
      key={name + chip.toString()}
    />
  </div>
);

export default Pet;
