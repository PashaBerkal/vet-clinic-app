import React, { FC } from 'react';
import DataPet from './DataPet/DataPet';
import getImageByBreed from '../../../utils/getImageByBreed';
import classes from './Pet.module.scss';

interface PetProps {
  name: string,
  birthday: string,
  animal: string,
  sex: string,
  color?: string,
  chip?: string,
  breed: string,
}

const Pet: FC<PetProps> = ({ name, animal, birthday, chip, color, sex, breed }) => (
  <div className={classes.Pet}>
    <div className={classes.main}>
      <div className={classes.img}>
        {getImageByBreed(animal)}
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
      key={name + chip}
    />
  </div>
);

export default Pet;
