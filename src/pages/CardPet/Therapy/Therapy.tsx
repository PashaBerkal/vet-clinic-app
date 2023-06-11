import { FC } from 'react';
import AccordionCard from '../../../common/AccordionCard/AccordionCard';
import { IVisit } from '../../../models/IVisit';
import classes from './Therapy.module.scss';

interface PropsTherapy {
  visits?: IVisit[]
}

const Therapy: FC<PropsTherapy> = ({ visits }) => (
  <div className={classes.Therapy}>
    <div className={classes.title}>Диагнозы</div>
    <div className={classes.diagnoses}>
      {visits && visits.filter((visit) => visit.diagnoses[0]).map((visit) => (
        <AccordionCard diagnosis={visit.diagnoses[0].diagnosis_name} prescription={visit.prescription} />
      ))}
    </div>
  </div>
);

export default Therapy;
