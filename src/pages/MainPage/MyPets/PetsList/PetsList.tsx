import Pet from './Pet';
import petsApi from '../../../../services/PetsService';
import classes from './PetsList.module.scss';
import { IPet } from '../../../../models/IPet';
import { petsApiSlice } from '../../../../redux/pets/petsApiSlice';
// import { useFetchAllPetsQuery } from '../../../../redux/pets/petsApiSlice';

const PetsList = () => {
  const { data: pets, isLoading, isError } = petsApiSlice.useFetchAllPetsQuery(100);
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
