import { useEffect } from 'react';
import moment from 'moment';
import { useFetchAllPetsQuery } from '../../../redux/pets/petsApiSlice';
import Pet from './Pet/Pet';
import classes from './PetsList.module.scss';

const PetsList = () => {
  const { data: pets, isError, isLoading, refetch } = useFetchAllPetsQuery({ name: '' });
  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className={classes.PetsList}>
      {isLoading && <p>загрузка...</p>}
      {isError && <p>Произошла ошибка</p>}
      {pets && pets.map((pet, index) => (
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
