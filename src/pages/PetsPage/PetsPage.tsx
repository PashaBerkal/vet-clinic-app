import Container from '../../hoc/Container/Container';
import Filters from './Filters/Filters';
import PetsList from './PetsList/PetsList';
import classes from './PetsPage.module.scss';

const PetsPage = () => (
  <Container>
    <div className={classes.PetsPage}>
      <Filters />
      <PetsList />
    </div>
  </Container>
);

export default PetsPage;
