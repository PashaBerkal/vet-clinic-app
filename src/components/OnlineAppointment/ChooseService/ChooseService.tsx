/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ChangeEventHandler, useState } from 'react';
import clsx from 'clsx';
import { surgeryProcedures, ultrasonographyProcedures } from './procedures';
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import classes from './ChooseService.module.scss';
import { nextStep, setProcedure } from '../../../redux/appointment/appointment';
import { useAppDispatch } from '../../../hooks/redux';
import SearchField from '../../../common/SearchField/SearchField';

type ChooseProcedureProps = {
    procedures: Array<string>;
}

const ChooseProcedure: React.FC<ChooseProcedureProps> = ({ procedures }) => {
  const dispatch = useAppDispatch();
  const procedureClickHandler = (index: number) => {
    dispatch(setProcedure(procedures[index]));
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
          {
        procedures
          .filter((elem) => elem.toLowerCase().includes(value.toLowerCase()))
          .map((description, index) => (
            <div
              key={(index + Math.random()).toString()}
              onClick={() => procedureClickHandler(index)}
              className={classes.service}
            >
              <p>{description}</p>
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
  const [procedureObject, setProcedureObject] = useState({
    isSelectedUltrasonography: false, isSelectedSurgery: false,
  });
  const selectUltrasonography = () => setProcedureObject({ ...procedureObject, isSelectedUltrasonography: true });
  const selectSurgery = () => setProcedureObject({ ...procedureObject, isSelectedSurgery: true });

  const content = () => {
    if (procedureObject.isSelectedUltrasonography) {
      return (
        <ChooseProcedure procedures={ultrasonographyProcedures} />
      );
    }
    if (procedureObject.isSelectedSurgery) {
      return (
        <ChooseProcedure procedures={surgeryProcedures} />
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
