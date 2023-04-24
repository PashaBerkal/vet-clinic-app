import React, { FC } from 'react';
import Alert, { AlertColor } from '@material-ui/core/Alert';
import { ReactComponent as Procedure } from '../../assets/Procedure.svg';
import MenuButton from '../../../../common/MenuButton/MenuButton';
import classes from './Visit.module.scss';

interface VisitProps {
    name: string,
    date: string,
    procedure: string,
    doctor: string,
    state: AlertColor,
}

const Visit: FC<VisitProps> = ({ name, date, doctor, procedure, state }) => {
  const renderSwitch = (status: AlertColor) => {
    switch (status) {
      case 'success':
        return 'Прием завершен';
      case 'info':
        return 'Ожидание приема';
      case 'error':
        return 'Запись отменена';
      default:
        return 'Ошибка';
    }
  };
  return (
    <div className={classes.Visit}>
      <div className={classes.leftPositionInfo}>
        <div className={classes.logo}>
          <div className={classes.img}>
            <Procedure />
          </div>
          <div className={classes.text}>
            <div className={classes.name}>
              {name}
            </div>
            <div className={classes.date}>
              {date}
            </div>
          </div>
        </div>
        <div className={classes.text}>
          <div className={classes.procedure}>
            {procedure}
          </div>
          <div className={classes.doctor}>
            {doctor}
          </div>
        </div>
      </div>
      <div className={classes.rightPositionInfo}>
        <div className={classes.state}>
          <Alert icon={false} severity={state} className={classes.alert}>
            {
              renderSwitch(state)
            }
          </Alert>
        </div>
        <div className={classes.button}>
          <MenuButton />
        </div>
      </div>
    </div>
  );
};

export default Visit;
