import { FC } from 'react';
import Visit from './Visit/Visit';
import { IVisit } from '../../../../models/IVisit';
import classes from './VisitsList.module.scss';

type VisitsListProps = {
  visits?: IVisit[],
}

const VisitsList: FC<VisitsListProps> = ({ visits }) => (
  <div className={classes.VisitsList}>

    {visits && visits.slice(0, 3).map((visit) => (
      <Visit
        name={visit.pet.name}
        date={visit.date}
        procedure="Нет данных"
        result="Нет данных"
        key={visit.date + visit.pet.name}
      />
    ))}
  </div>
);

export default VisitsList;
