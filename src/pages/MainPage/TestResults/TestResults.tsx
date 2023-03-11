import { Button } from '@material-ui/core';
import { ReactComponent as Arrow } from '../assets/Arrow.svg';
import { ReactComponent as Rabbits } from '../assets/Rabbits.svg';
import classes from './TestResults.module.scss';

const TestResults = () => (
  <div className={classes.TestResults}>
    <div className={classes.resultsTitle}>Результаты анализов</div>
    <div className={classes.resultsInfo}>
      Готов анализ на пироплазмов
      <span>12.02.23, Кеша</span>
    </div>
    <div className={classes.resultsMore}>
      <Rabbits />
      <Button className={classes.button}>
        <div className={classes.text}>Подробнее</div>
        <Arrow />
      </Button>
    </div>
  </div>
);

export default TestResults;
