/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ChangeEventHandler, useState } from 'react';
import clsx from 'clsx';
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import classes from './ChoosePet.module.scss';
import SearchField from '../../../common/SearchField/SearchField';
import { useFetchAllPetsQuery } from '../../../redux/pets/petsApiSlice';
import { nextStep, setPet } from '../../../redux/appointment/appointment';
import { useAppDispatch } from '../../../hooks/redux';

const ChooseYourPet: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: pets, isLoading } = useFetchAllPetsQuery({ name: '' });
  const petClickHandler = (name: string, id: string | undefined) => {
    dispatch(setPet({ name, id }));
    dispatch(nextStep());
  };

  const [value, setValue] = useState('');

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={classes.content}>
      <SearchField
        className={classes.searchField}
        value={value}
        onChangeValue={onChangeHandler}
      />
      <div className={classes.chooseTypeContentWrapper}>
        <div className={classes.chooseTypeContent}>
          { isLoading && 'Загрузка' }
          {
          pets?.filter((elem) => elem.name.toLowerCase().includes(value.toLowerCase()))
            .map((description, index) => (
              <div
                key={(index + Math.random()).toString()}
                onClick={() => petClickHandler(description.name, description?.pet_id)}
                className={classes.type}
              >
                <p>{description.name}</p>
                <Arrow />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

const ChoosePet = () => {
  const [petType, setPetType] = useState('');
  const dispatch = useAppDispatch();

  const setNewPetType = () => {
    dispatch(setPet({
      name: 'Новый питомец',
      id: 104327,
    }));
    dispatch(nextStep());
  };

  const content = () => {
    if (petType === 'MY_PET') {
      return (
        <ChooseYourPet />
      );
    }
    return (
      <div className={classes.chooseTypeContent}>
        <div onClick={setNewPetType} className={clsx(classes.type, classes.firstType)}>
          <p>Новый питомец</p>
          <Arrow />
        </div>
        <div onClick={() => setPetType('MY_PET')} className={classes.type}>
          <p>Зарегистрированный питомец клиники</p>
          <Arrow />
        </div>
      </div>
    );
  };

  return (
    <div className={classes.chooseType}>
      {content()}
    </div>
  );
};

export default ChoosePet;
