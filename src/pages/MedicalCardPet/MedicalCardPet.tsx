/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Container from '../../hoc/Container/Container';
import Pet from './Pet/Pet';
import Destination from './Destination/Destination';
import { ReactComponent as Arrow } from './assets/Arrow.svg';
import classes from './MedicalCardPet.module.scss';
import DataVisit from './DataVisit/DataVisit';
import { useFetchVisitHistoryQuery } from '../../redux/visits/visitsApiSlice';

const MedicalCardPet = () => {
  const { id } = useParams();
  const { data: visitHistory, isError, isLoading } = useFetchVisitHistoryQuery({ visitId: id });
  const navigate = useNavigate();
  const clickHandler = () => navigate(-1);
  return (
    <Container>
      <div onClick={clickHandler} className={classes.back}>
        <Arrow />
        Назад
      </div>
      {isLoading && <p>загрузка...</p>}
      {isError && <p>Произошла ошибка</p>}
      {visitHistory
      && (
      <div className={classes.MedicalCardPet}>
        <Pet
          animal={visitHistory.pet.kind.kind_name}
          breathingRate={visitHistory.breath_beat}
          breed={visitHistory.pet.breed && visitHistory.pet.breed.breed_name}
          name={visitHistory.pet.name}
          pulse={visitHistory.heart_beat}
          weight={visitHistory.weight}
        />
        <div className={classes.infoSection}>
          <DataVisit
            date={visitHistory.date}
            diagnosis={visitHistory.diagnoses[0] ? visitHistory.diagnoses[0].diagnosis_name : 'Нет данных'}
            type={visitHistory.type}
          />
        </div>
        <Destination
          prescription={visitHistory.prescription}
          recommendation={visitHistory.recommendation}
          firstVisitId={visitHistory.first_visit_id}
        />
      </div>)}
    </Container>
  );
};

export default MedicalCardPet;
