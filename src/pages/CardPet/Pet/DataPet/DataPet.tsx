import React, { FC } from 'react';
import moment from 'moment';
import { ReactComponent as Birthday } from '../../assets/Birthday.svg';
import { ReactComponent as Animal } from '../../assets/Animal.svg';
import { ReactComponent as Chip } from '../../assets/Chip.svg';
import { ReactComponent as Color } from '../../assets/Color.svg';
import { ReactComponent as Sex } from '../../assets/Sex.svg';
import classes from './DataPet.module.scss';

interface DataPetProps {
  birthday: string,
  sex: string,
  color?: string,
  chip: number,
  animal: string,
}

const DataPet: FC<DataPetProps> = ({ animal, birthday, chip, color, sex }) => (
  <div>
    <div className={classes.info}>
      <div className={classes.img}>
        <Birthday />
      </div>
      <div className={classes.text}>
        <div className={classes.top}>
          {moment(birthday).format('L')}
        </div>
        <div className={classes.bottom}>
          День рождения
        </div>
      </div>
    </div>
    <div className={classes.info}>
      <div className={classes.img}>
        <Animal />
      </div>
      <div className={classes.text}>
        <div className={classes.top}>
          {animal}
        </div>
        <div className={classes.bottom}>
          Вид
        </div>
      </div>
    </div>
    <div className={classes.info}>
      <div className={classes.img}>
        <Sex />
      </div>
      <div className={classes.text}>
        <div className={classes.top}>
          {sex}
        </div>
        <div className={classes.bottom}>
          Пол
        </div>
      </div>
    </div>
    <div className={classes.info}>
      <div className={classes.img}>
        <Color />
      </div>
      <div className={classes.text}>
        <div className={classes.top}>
          {color}
        </div>
        <div className={classes.bottom}>
          Цвет
        </div>
      </div>
    </div>
    <div className={classes.info}>
      <div className={classes.img}>
        <Chip />
      </div>
      <div className={classes.text}>
        <div className={classes.top}>
          {chip}
        </div>
        <div className={classes.bottom}>
          Номер чипа
        </div>
      </div>
    </div>
  </div>
);

export default DataPet;
