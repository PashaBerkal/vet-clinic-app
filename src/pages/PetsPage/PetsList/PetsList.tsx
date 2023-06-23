import { useEffect } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useFetchAllPetsQuery } from '../../../redux/pets/petsApiSlice';
import Pet from './Pet/Pet';
import classes from './PetsList.module.scss';
import { useAppSelector } from '../../../hooks/redux';
import { resetVisitsState } from '../../../redux/visits/visitsSlice';

const PetsList = () => {
  const { data: pets, isError, isLoading, refetch } = useFetchAllPetsQuery({ name: '' });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetVisitsState());
    refetch();
  }, []);

  const { animalTypeFilter } = useAppSelector((state) => state.visits);

  const [activeName, activeKind, activeBreed] = animalTypeFilter
    .map((option) => option.active.toLocaleLowerCase());

  const filterPets = pets?.filter((pet) => {
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

  return (
    <div className={classes.PetsList}>
      {isLoading && <p>загрузка...</p>}
      {isError && <p>Произошла ошибка</p>}
      {filterPets && filterPets.map((pet, index) => (
        <Pet
          age={pet.birthday ? moment(pet.birthday, 'YYYY').fromNow().slice(0, -5) : ''}
          animal={pet.kind.kind_name ? pet.kind.kind_name : 'Нет данных'}
          breed={pet.breed ? pet.breed.breed_name : ''}
          name={pet.name ? pet.name : 'Нет данных'}
          id={pet.pet_id}
          key={pet.name + index.toString()}
        />
      ))}
    </div>
  );
};
export default PetsList;
