import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import moment from 'moment';
import classes from './LastVisit.module.scss';

interface visitProps {
  date?: string,
  procedure: string,
}

const LastVisit: FC<visitProps> = ({ date, procedure }) => (
  <div className={classes.LastVisit}>
    <div className={classes.title}>Последний визит</div>
    <div className={classes.text}>
      {date ? moment(date).format('L, LT') : 'Нет данных'}
      <span>{procedure}</span>
    </div>
    <Button variant="outlined" className={classes.button}>Подробнее</Button>
  </div>
);

export default LastVisit;
