import React, { FC } from 'react';
import DataPet from './DataPet/DataPet';
import getImageByBreed from '../../../utils/getImageByBreed';
import classes from './Pet.module.scss';

interface PetProps {
  name: string,
  breed: string,
  animal: string,
  weight: string,
  pulse: string,
  breathingRate: string,
}

const Pet: FC<PetProps> = ({ name, pulse, weight, breed, animal, breathingRate }) => (
  <div className={classes.Pet}>
    <div className={classes.main}>
      <div className={classes.img}>
        {getImageByBreed(animal)}
      </div>
      <div className={classes.name}>
        {name}
      </div>
      {breed
        && (
          <div className={classes.breed}>
            {breed}
          </div>)}
    </div>
    <DataPet
      weight={weight}
      pulse={pulse}
      breathingRate={breathingRate}
      key={name + Math.random()}
    />
  </div>
);

export default Pet;
