import { useEffect } from 'react';
import Pet from './Pet';
import { IPet } from '../../../../models/IPet';
import { useFetchAllPetsQuery } from '../../../../redux/pets/petsApiSlice';
import classes from './PetsList.module.scss';

const PetsList = () => {
  const { data: pets, isLoading, isError, refetch } = useFetchAllPetsQuery(100);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className={classes.pets}>
      {isLoading && <p>загрузка...</p>}
      {isError && <p>Произошла ошибка</p>}
      {pets && pets.map((pet: IPet) => (
        <Pet name={pet.name} breed={pet.kind.kind_name} key={pet.pet_id} />
      ))}
    </div>
  );
};

export default PetsList;
