import Pet from './Pet';
import petsApi from '../../../../services/PetsService';
import classes from './PetsList.module.scss';
import { IPet } from '../../../../models/IPet';

const PetsList = () => {
  const { data: pets, isLoading, isError } = petsApi.useFetchAllPetsQuery(100);
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
