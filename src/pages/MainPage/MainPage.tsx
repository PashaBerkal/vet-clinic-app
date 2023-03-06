import Container from '../../hoc/Container';
import LastVisits from './LastVisits';
import MyPets from './MyPets';
import NearestEntry from './NearestEntry';
import TestResults from './TestResults';
import classes from './MainPage.module.scss'

const MainPage = () => {
  return (
    <div className={classes.MainPage}>
      <Container>
        <div className={classes.gridContainer}>
          <MyPets/>
          <div className={classes.infoSection}>
            <NearestEntry/>
            <TestResults/>
          </div>
          <LastVisits/>
        </div>
      </Container>
    </div>
  );
}

export default MainPage;