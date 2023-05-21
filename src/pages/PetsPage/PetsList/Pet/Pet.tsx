import { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from './Pet.module.scss';
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';
import renderPetImg from '../../../../utils/getImageByType';

interface PetProps {
  name: string,
  age: string,
  animal: string,
  breed: string,
  id?: string,
}

const Pet: FC<PetProps> = ({ name, age, animal, breed, id }) => (
  <Link to={`/PetsPage/${id}`} style={{ textDecoration: 'none' }}>
    <div className={classes.Pet}>
      <div className={classes.leftPositionInfo}>
        <div className={classes.logo}>
          <div className={classes.img}>
            {renderPetImg(animal)}
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
        <div className={classes.arrow}>
          <Arrow />
        </div>
      </div>
    </div>
  </Link>
);

export default Pet;
