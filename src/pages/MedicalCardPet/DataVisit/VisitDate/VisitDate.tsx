import React, { FC } from 'react';
import moment from 'moment';
import { ReactComponent as Date } from '../../assets/Date.svg';
import classes from './VisitDate.module.scss';

interface PropsVisitDate {
  date: string
}

const VisitDate: FC<PropsVisitDate> = ({ date }) => (
  <div className={classes.VisitDate}>
    <div className={classes.text}>
      <div className={classes.title}>
        Дата визита
      </div>
      <div className={classes.date}>
        {moment(date).format('L, LT')}
      </div>
    </div>
    <Date />
  </div>
);

export default VisitDate;
