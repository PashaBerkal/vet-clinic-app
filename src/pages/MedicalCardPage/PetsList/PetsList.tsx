import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFetchVisitsQuery } from '../../../redux/visits/visitsApiSlice';
import Visit from './Visit/Visit';
import classes from './PetsList.module.scss';
import { useAppSelector } from '../../../hooks/redux';
import { resetVisitsState } from '../../../redux/visits/visitsSlice';

const PetsList = () => {
  const { data: visits, isError, isLoading, refetch } = useFetchVisitsQuery({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetVisitsState());
    refetch();
  }, []);

  const { animalTypeFilter, receiveActive } = useAppSelector((state) => state.visits);

  const [activeName, activeKind, activeBreed] = animalTypeFilter
    .map((option) => option.active.toLocaleLowerCase());

  const firstFilteringStep = visits?.filter(({ pet }) => {
    const name = pet?.name.toLocaleLowerCase() || '';
    const kindName = pet?.kind?.kind_name.toLocaleLowerCase() || '';
    const breedName = pet?.breed?.breed_name.toLocaleLowerCase() || '';
    if (
      name.includes(activeName)
      && kindName?.includes(activeKind)
      && breedName?.includes(activeBreed)
    ) {
      return true;
    }
    return false;
  });

  const secondFilteringStep = firstFilteringStep?.filter((visit) => {
    if (receiveActive === 'All') return true;
    return visit?.type === receiveActive;
  });

  return (
    <div className={classes.PetsList}>
      {isLoading && <p>загрузка...</p>}
      {isError && <p>Произошла ошибка</p>}
      {secondFilteringStep && secondFilteringStep.map((visit, index) => (
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
