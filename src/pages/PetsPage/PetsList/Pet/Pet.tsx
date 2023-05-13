import { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from './Pet.module.scss';
import { ReactComponent as Paw } from '../../../MainPage/assets/Paw.svg';
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

interface PetProps {
  name: string,
  age: string,
  animal: string,
  breed: string,
  id: number,
}

const Pet: FC<PetProps> = ({ name, age, animal, breed, id }) => (
  <Link to={`/PetsPage/${id.toString()}`} style={{ textDecoration: 'none' }}>
    <div className={classes.Pet}>
      <div className={classes.leftPositionInfo}>
        <div className={classes.logo}>
          <div className={classes.img}>
            <Paw />
          </div>
          <div className={classes.text}>
            <div className={classes.name}>
              {name}
            </div>
            <div className={classes.age}>
              {age}
            </div>
          </div>
        </div>
        <div className={classes.text}>
          <div className={classes.animal}>
            {animal}
          </div>
          <div className={classes.breed}>
            {breed}
          </div>
        </div>
      </div>
      <div className={classes.rightPositionInfo}>
        <div className={classes.ArrowText}>
          Последний визит
        </div>
        <div className={classes.arrow}>
          <Arrow />
        </div>
      </div>
    </div>
  </Link>
);

export default Pet;
