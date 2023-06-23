import classes from './FiltersTop.module.scss';
import { ReactComponent as Filter } from '../../assets/Filter.svg';

const FiltersTop = () => (
  <div className={classes.FiltersTop}>
    <div className={classes.main}>
      <div className={classes.logo}>
        <Filter />
      </div>
      <div className={classes.title}>Фильтры</div>
    </div>
  </div>
);
export default FiltersTop;
