import VisitsList from './VisitsList/VisitsList';
import classes from './LastVisits.module.scss';

const LastVisits = () => (
  <div className={classes.LastVisits}>
    <div className={classes.visitsTop}>
      <div className={classes.visitsTitle}>
        Последние посещения
      </div>
      <div className={classes.visitsAll}>
        Все
      </div>
    </div>
    <VisitsList />
  </div>
);

export default LastVisits;
