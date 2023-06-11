import React, { FC } from 'react';
import classes from './DataVisit.module.scss';
import VisitDate from './VisitDate/VisitDate';
import VisitDiagnosis from './VisitDiagnosis/VisitDiagnosis';
import VisitType from './VisitType/VisitType';

interface PropsDataVisit {
  diagnosis: string,
  type: string,
  date: string,
}

const DataVisit: FC<PropsDataVisit> = ({ date, diagnosis, type }) => (
  <div className={classes.DataVisit}>
    <VisitDate date={date} />
    <VisitType type={type} />
    <VisitDiagnosis diagnosis={diagnosis} />
  </div>
);

export default DataVisit;
