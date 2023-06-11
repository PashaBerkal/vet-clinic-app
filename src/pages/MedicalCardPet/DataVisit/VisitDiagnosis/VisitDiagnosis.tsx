import React, { FC } from 'react';
import { ReactComponent as Diagnosis } from '../../assets/Diagnosis.svg';
import classes from './VisitDiagnosis.module.scss';

interface PropsVisitDate {
  diagnosis: string,
}

const VisitDiagnosis: FC<PropsVisitDate> = ({ diagnosis }) => (
  <div className={classes.VisitDiagnosis}>
    <div className={classes.text}>
      <div className={classes.title}>
        Диагноз
      </div>
      <div className={classes.date}>
        {diagnosis}
      </div>
    </div>
    <Diagnosis />
  </div>
);

export default VisitDiagnosis;
