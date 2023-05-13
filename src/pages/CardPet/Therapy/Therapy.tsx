import AccordionCard from '../../../common/AccordionCard/AccordionCard';
import classes from './Therapy.module.scss';

const Therapy = () => (
  <div className={classes.Therapy}>
    <div className={classes.title}>Сейчас Кеша лечит</div>
    <div className={classes.diagnoses}>
      <AccordionCard />
      <AccordionCard />
      <AccordionCard />
      <AccordionCard />
      <AccordionCard />
      <AccordionCard />
      <AccordionCard />
      <AccordionCard />
      <AccordionCard />
    </div>
  </div>
);

export default Therapy;
