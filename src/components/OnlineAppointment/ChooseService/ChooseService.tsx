/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ChangeEventHandler, useState } from 'react';
import clsx from 'clsx';
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import classes from './ChooseService.module.scss';
import { ProcedureType, nextStep, setProcedure } from '../../../redux/appointment/appointment';
import { useAppDispatch } from '../../../hooks/redux';
import SearchField from '../../../common/SearchField/SearchField';
import { useFetchSurgeonsQuery } from '../../../redux/visits/visitsApiSlice';

const ChooseProcedure: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: procedures, isLoading } = useFetchSurgeonsQuery({});
  const procedureClickHandler = (id: number, name: string) => {
    dispatch(setProcedure({ id, name, type: ProcedureType.Surgeon }));
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
      <div className={classes.chooseServiceContentWrapper}>
        <div className={classes.chooseServiceContent}>
          { isLoading && 'Загрузка' }
          {
        procedures?.filter((elem) => elem.name.toLowerCase().includes(value.toLowerCase()))
          .map((description, index) => (
            <div
              key={(index + Math.random()).toString()}
              onClick={() => procedureClickHandler(description.id, description.name)}
              className={classes.service}
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

const ChooseService: React.FC = () => {
  const dispatch = useAppDispatch();
  const [procedureObject, setProcedureObject] = useState({
    isSelectedUltrasonography: false, isSelectedSurgery: false,
  });
  const selectUltrasonography = () => {
    dispatch(setProcedure({ id: 57, name: 'Ультразвуковое исследование', type: ProcedureType.Ultrasound }));
    dispatch(nextStep());
  };
  const selectSurgery = () => setProcedureObject({ ...procedureObject, isSelectedSurgery: true });

  const content = () => {
    if (procedureObject.isSelectedSurgery) {
      return (
        <ChooseProcedure />
      );
    }
    return (
      <div className={classes.chooseServiceContent}>
        <div onClick={selectUltrasonography} className={clsx(classes.service, classes.firstService)}>
          <p>Ультразвуковое исследование</p>
          <Arrow />
        </div>
        <div onClick={selectSurgery} className={classes.service}>
          <p>Хирургия</p>
          <Arrow />
        </div>
      </div>
    );
  };

  return (
    <div className={classes.chooseService}>
      {content()}
    </div>
  );
};

export default ChooseService;
