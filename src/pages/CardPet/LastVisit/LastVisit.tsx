import React from 'react';
import { Button } from '@material-ui/core';
import classes from './LastVisit.module.scss';

const LastVisit = () => (
  <div className={classes.LastVisit}>
    <div className={classes.title}>Последний визит</div>
    <div className={classes.text}>
      12.02.2023, 12:12
      <span>Калицивирусная инфекция</span>
    </div>
    <Button variant="outlined" className={classes.button}>Подробнее</Button>
  </div>
);

export default LastVisit;
