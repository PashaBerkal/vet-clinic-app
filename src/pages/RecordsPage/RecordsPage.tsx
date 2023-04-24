import Container from '../../hoc/Container/Container';
import VisitsList from './VisitsList/VisitsList';
import classes from './RecordsPage.module.scss';

const RecordsPage = () => (
  <Container>
    <div className={classes.RecordsPage}>
      <VisitsList />
    </div>
  </Container>

);

export default RecordsPage;
