import { useEffect } from 'react';
import { useFetchVisitsQuery } from '../../../redux/visits/visitsApiSlice';
import Visit from './Visit/Visit';
import classes from './PetsList.module.scss';

const PetsList = () => {
  const { data: visits, isError, isLoading, refetch } = useFetchVisitsQuery({});
  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className={classes.PetsList}>
      {isLoading && <p>загрузка...</p>}
      {isError && <p>Произошла ошибка</p>}
      {visits && visits.map((visit, index) => (
        <Visit
          name={visit.pet.name}
          date={visit.date}
          result={visit.diagnoses[0] ? visit.diagnoses[0].diagnosis_name : 'Нет данных'}
          procedure={visit.type}
          key={index.toString() + visit.type}
          id={visit.visit_id}
        />
      ))}
    </div>
  );
};

export default PetsList;
