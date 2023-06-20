import React, { FC } from 'react';
import moment from 'moment';
import classes from './LastVisit.module.scss';

interface VisitProps {
  date?: string,
  procedure: string,
}

const LastVisit: FC<VisitProps> = ({ date, procedure }) => (
  <div className={classes.LastVisit}>
    <div className={classes.title}>Последний визит</div>
    <div className={classes.text}>
      {date ? moment(date).format('L, LT') : 'Нет данных'}
      <span>{procedure}</span>
    </div>
  </div>
);

export default LastVisit;
