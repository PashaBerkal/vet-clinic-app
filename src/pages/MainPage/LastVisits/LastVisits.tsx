import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import VisitsList from './VisitsList/VisitsList';
import { useFetchVisitsQuery } from '../../../redux/visits/visitsApiSlice';
import classes from './LastVisits.module.scss';

const LastVisits = () => {
  const { data: visits, isLoading, isError, refetch } = useFetchVisitsQuery({ maxCount: 3 });
  useEffect(() => {
    refetch();
  }, []);
  return (

    <div className={classes.LastVisits}>
      <div className={classes.visitsTop}>
        <div className={classes.visitsTitle}>
          Последние посещения
        </div>
        <Link to="/MedicalCardPage" style={{ textDecoration: 'none' }}>
          <div className={classes.visitsAll}>
            Все
          </div>
        </Link>
      </div>
      {isLoading && <p>загрузка...</p>}
      {isError && <p>Произошла ошибка</p>}
      {visits && <VisitsList visits={visits} />}
    </div>
  );
};

export default LastVisits;
