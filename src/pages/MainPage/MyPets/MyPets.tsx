import { ChangeEventHandler, useState } from 'react';
import PetsList from './PetsList';
import SearchField from '../../../common/SearchField';
import classes from './MyPets.module.scss';

const MyPets = () => {
  const [value, setValue] = useState('');
  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={classes.MyPets}>
      <div className={classes.title}>Мои питомцы</div>
      <SearchField value={value} onChangeValue={onChangeHandler} />
      <PetsList />
    </div>
  );
};

export default MyPets;
