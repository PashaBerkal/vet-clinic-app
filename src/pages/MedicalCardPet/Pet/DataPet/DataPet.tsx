import { FC } from 'react';
import { ReactComponent as Weight } from '../../assets/Weight.svg';
import { ReactComponent as Pulse } from '../../assets/Pulse.svg';
import { ReactComponent as BreathingRate } from '../../assets/BreathingRate.svg';
import classes from './DataPet.module.scss';

interface DataPetProps {
  weight: string,
  pulse: string,
  breathingRate?: string,
}

const DataPet: FC<DataPetProps> = ({ breathingRate, pulse, weight }) => (
  <div>
    {weight && (
    <div className={classes.info}>
      <div className={classes.img}>
        <Weight />
      </div>
      <div className={classes.text}>
        <div className={classes.left}>
          Вес
          <span>кг</span>
        </div>
        <div className={classes.right}>
          {weight}
        </div>
      </div>
    </div>
    )}
    {pulse && (
      <div className={classes.info}>
        <div className={classes.img}>
          <Pulse />
        </div>
        <div className={classes.text}>
          <div className={classes.left}>
            Пульс
            <span>уд/мин</span>
          </div>
          <div className={classes.right}>
            {pulse}
          </div>
        </div>
      </div>
    )}
    {breathingRate && (
      <div className={classes.info}>
        <div className={classes.img}>
          <BreathingRate />
        </div>
        <div className={classes.text}>
          <div className={classes.left}>
            Частота дыхания
            <span>дых/мин</span>
          </div>
          <div className={classes.right}>
            {breathingRate}
          </div>
        </div>
      </div>
    )}
  </div>
);

export default DataPet;
