import { ChangeEventHandler, useEffect, useState } from 'react';
import PetsList from './PetsList';
import SearchField from '../../../common/SearchField';
import { useFetchAllPetsQuery } from '../../../redux/pets/petsApiSlice';
import classes from './MyPets.module.scss';

const MyPets = () => {
  const [value, setValue] = useState('');
  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const { data: pets, isLoading, isError, refetch } = useFetchAllPetsQuery({ name: '' });

  const filteredPets = pets?.filter((pet) => pet?.name.toLocaleLowerCase()
    .includes(value.toLocaleLowerCase()));

  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className={classes.MyPets}>
      <div className={classes.title}>Мои питомцы</div>
      <SearchField value={value} onChangeValue={onChangeHandler} />
      {isLoading && <p>загрузка...</p>}
      {isError && <p>Произошла ошибка</p>}
      {pets && <PetsList pets={filteredPets} />}
    </div>
  );
};

export default MyPets;
