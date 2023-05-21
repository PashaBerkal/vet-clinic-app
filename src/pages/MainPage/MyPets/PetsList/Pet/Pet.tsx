import { Link } from 'react-router-dom';
import getImageByBreed from '../../../../../utils/getImageByType';
import classes from './Pet.module.scss';

type Props = {
    name: string,
    breed: string,
    id?: string,
}

const Pet = ({ name, breed, id }: Props) => (
  <Link to={`/PetsPage/${id}`} style={{ textDecoration: 'none' }}>
    <div className={classes.pet}>
      <div className={classes.petLogo}>
        {getImageByBreed(breed)}
      </div>
      <div className={classes.petInfo}>
        <div className={classes.name}>{name}</div>
        <div className={classes.breed}>{breed}</div>
      </div>
    </div>
  </Link>
);
export default Pet;
