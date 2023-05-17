import { useEffect } from 'react';
import Container from '../../hoc/Container';
import LastVisits from './LastVisits';
import MyPets from './MyPets';
import NearestEntry from '../../common/NearestEntry';
import TestResults from './TestResults';
import { useFetchRecordsQuery } from '../../redux/visits/visitsApiSlice';
import classes from './MainPage.module.scss';

const MainPage = () => {
  const { data: visit, isLoading, isError, refetch } = useFetchRecordsQuery({ maxCount: 1 });

  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className={classes.MainPage}>
      <Container>
        <div className={classes.gridContainer}>
          <MyPets />
          <div className={classes.infoSection}>
            {isLoading && <p>загрузка...</p>}
            {isError && <p>Произошла ошибка</p>}
            {visit && <NearestEntry visitInfo={visit[0]} />}
            <TestResults />
          </div>
          <LastVisits />
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
