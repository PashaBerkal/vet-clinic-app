import { useEffect } from 'react';
import Pet from './Pet';
import { IPet } from '../../../../models/IPet';
import { useFetchAllPetsQuery } from '../../../../redux/pets/petsApiSlice';
import classes from './PetsList.module.scss';
import { useAppDispatch } from '../../../../hooks/redux';
import { updatePets } from '../../../../redux/pets/petsSlice';

const PetsList = () => {
  const { data: pets, isLoading, isError, refetch } = useFetchAllPetsQuery(100);
  const disaptch = useAppDispatch();
  useEffect(() => {
    refetch();
    disaptch(updatePets(pets));
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
