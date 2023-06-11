import React, { FC } from 'react';
import classes from './VisitType.module.scss';
import getImageByVisitType from '../../../../utils/getImageByVisitType';

interface PropsVisitType {
  type: string,
}

const VisitType: FC<PropsVisitType> = ({ type }) => (
  <div className={classes.VisitType}>
    <div className={classes.text}>
      <div className={classes.title}>
        Тип приема
      </div>
      <div className={classes.date}>
        {getImageByVisitType(type).procedure}
      </div>
    </div>
    <div className={classes.img}>
      {getImageByVisitType(type).img}
    </div>
  </div>
);

export default VisitType;
