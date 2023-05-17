import { Link, useParams } from 'react-router-dom';
import Container from '../../hoc/Container/Container';
import Pet from './Pet/Pet';
import NearestEntry from '../MainPage/NearestEntry/NearestEntry';
import LastVisit from './LastVisit/LastVisit';
import Therapy from './Therapy/Therapy';
import { ReactComponent as Arrow } from './assets/Arrow.svg';
import classes from './CardPet.module.scss';
import { useFetchAllPetsQuery } from '../../redux/pets/petsApiSlice';

const CardPet = () => {
  const { name } = useParams();
  const { data: pet, isError, isLoading, refetch } = useFetchAllPetsQuery({ name });
  console.log(pet);
  return (
    <Container>
      <Link to="/PetsPage" style={{ textDecoration: 'none' }}>
        <div className={classes.back}>
          <Arrow />
          Назад
        </div>
      </Link>
      <div className={classes.CardPet}>
        {isLoading && <p>загрузка...</p>}
        {isError && <p>Произошла ошибка</p>}
        {pet
          && <Pet
            animal={pet[0].kind.kind_name}
            birthday={pet[0].birthday}
            chip={pet[0].pet_id}
            color={pet[0].color?.color_name.toString() ? pet[0].color?.color_name.toString() : 'Нет данных'}
            name={pet[0].name}
            sex={pet[0].sex.sex_name}
            breed={pet[0].breed.breed_name ? pet[0].breed.breed_name : 'Error'}
            key={pet[0].pet_id?.toString()}
          />}
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
