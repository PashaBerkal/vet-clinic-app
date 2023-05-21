import { Link, useParams } from 'react-router-dom';
import Container from '../../hoc/Container/Container';
import Pet from './Pet/Pet';
import NearestEntry from '../../common/NearestEntry/NearestEntry';
import LastVisit from './LastVisit/LastVisit';
import Therapy from './Therapy/Therapy';
import { ReactComponent as Arrow } from './assets/Arrow.svg';
import classes from './CardPet.module.scss';
import { useFetchPetQuery } from '../../redux/pets/petsApiSlice';
import { useFetchRecordsQuery, useFetchVisitsQuery } from '../../redux/visits/visitsApiSlice';

const CardPet = () => {
  const { id } = useParams();
  const { data: pet, isError: isErrorPet, isLoading: isLoadingPet } = useFetchPetQuery(
    { petId: id },
  );
  const petID = pet && pet.pet_id;
  const { data: record, isError: isErrorRecord, isLoading: isLoadingRecord } = useFetchRecordsQuery(
    {
      petId: petID,
      maxCount: 1,
    },
  );
  const { data: visit, isLoading: isLoadingVisit, isError: isErrorVisit } = useFetchVisitsQuery(
    {
      petId: petID,
      maxCount: 1,
    },
  );

  return (
    <Container>
      <Link to="/PetsPage" style={{ textDecoration: 'none' }}>
        <div className={classes.back}>
          <Arrow />
          Назад
        </div>
      </Link>
      <div className={classes.CardPet}>
        {isLoadingPet && <p>загрузка...</p>}
        {isErrorPet && <p>Произошла ошибка</p>}
        {pet
          && <Pet
            animal={pet.kind.kind_name}
            birthday={pet.birthday}
            chip={pet.pet_id}
            color={pet.color?.color_name.toString()}
            name={pet.name}
            sex={pet.sex.sex_name}
            breed={pet.breed ? pet.breed.breed_name : ''}
            key={pet.pet_id?.toString()}
          />}
        <div className={classes.infoSection}>
          {isLoadingRecord && <p>загрузка...</p>}
          {isErrorRecord && <p>Произошла ошибка</p>}
          {record && <NearestEntry visitInfo={record[0]} />}
          {isLoadingVisit && <p>загрузка...</p>}
          {isErrorVisit && <p>Произошла ошибка</p>}
          {visit && <LastVisit date={visit[0] ? visit[0].date : ''} procedure={visit[0]?.diagnoses[0] ? visit[0].diagnoses[0].diagnosis_name : ''} />}
        </div>
        <Therapy />
      </div>
    </Container>
  );
};

export default CardPet;
