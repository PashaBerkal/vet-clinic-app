import { Link, useParams } from 'react-router-dom';
import Container from '../../hoc/Container/Container';
import Pet from './Pet/Pet';
import NearestEntry from '../MainPage/NearestEntry/NearestEntry';
import LastVisit from './LastVisit/LastVisit';
import Therapy from './Therapy/Therapy';
import { ReactComponent as Arrow } from './assets/Arrow.svg';
import classes from './CardPet.module.scss';

interface Pet {
  name: string,
  birthday: string,
  animal: string,
  sex: string,
  color: string,
  chip: number,
  breed: string,
  id: string,
}
const pets: Pet[] = [
  {
    name: 'Кеша',
    birthday: '28.07.2004',
    animal: 'Кот',
    sex: 'Самец',
    color: 'Чёерный',
    chip: 12121212,
    breed: 'Ориентальный кот',
    id: '3',
  },
  {
    name: 'Барс',
    birthday: '28.07.2004',
    animal: 'Кот',
    sex: 'Самец',
    color: 'Чёерный',
    chip: 12121212,
    breed: 'Ориентальный кот',
    id: '2',
  },
];

const CardPet = () => {
  const { id } = useParams();
  return (
    <Container>
      <Link to="/PetsPage" style={{ textDecoration: 'none' }}>
        <div className={classes.back}>
          <Arrow />
          Назад
        </div>
      </Link>
      <div className={classes.CardPet}>
        { pets.filter((pet) => pet.id === id).map((pet, index) => (
          <Pet
            animal={pet.animal}
            birthday={pet.birthday}
            chip={pet.chip}
            color={pet.color}
            name={pet.name}
            sex={pet.sex}
            breed={pet.breed}
            key={index?.toString()}
          />
        )) }
        <div className={classes.infoSection}>
          <NearestEntry />
          <LastVisit />
        </div>
        <Therapy />
      </div>
    </Container>
  );
};

export default CardPet;
