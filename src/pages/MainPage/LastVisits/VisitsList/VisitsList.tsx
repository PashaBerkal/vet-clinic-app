import { FC } from 'react';
import Visit from './Visit/Visit';
import { IVisit } from '../../../../models/IVisit';
import classes from './VisitsList.module.scss';

type VisitsListProps = {
  visits?: IVisit[],
}

const VisitsList: FC<VisitsListProps> = ({ visits }) => (
  <div className={classes.VisitsList}>
    {visits && visits.map((visit) => (
      <Visit
        name={visit.pet.name}
        date={visit.date}
        result={visit.diagnoses[0] ? visit.diagnoses[0].diagnosis_name : 'Нет диагноза'}
        procedure={visit.type}
        key={visit.date + visit.pet.name}
      />
    ))}
  </div>
);

export default VisitsList;
