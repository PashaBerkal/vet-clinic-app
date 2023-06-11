/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link, useNavigate, useParams } from 'react-router-dom';
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
  const { data: visits, isLoading: isLoadingVisit, isError: isErrorVisit } = useFetchVisitsQuery(
    {
      petId: petID,
    },
  );
  const navigate = useNavigate();
  const clickHandler = () => navigate(-1);

  return (
    <Container>
      <div onClick={clickHandler} className={classes.back}>
        <Arrow />
        Назад
      </div>
      <div className={classes.CardPet}>
        {isLoadingPet && <p>загрузка...</p>}
        {isErrorPet && <p>Произошла ошибка</p>}
        {pet
          && <Pet
            animal={pet.kind.kind_name}
            birthday={pet.birthday}
            chip={pet.pet_id}
            color={pet.color?.color_name}
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
          {visits
           && <LastVisit
             date={visits[0] ? visits[0].date : ''}
             procedure={visits[0]?.diagnoses[0] ? visits[0].diagnoses[0].diagnosis_name : ''}
           />}
        </div>
        {visits && <Therapy visits={visits} />}
      </div>
    </Container>
  );
};

export default CardPet;
