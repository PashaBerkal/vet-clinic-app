import ToggleButtons from '../../common/ToggleButton/ToggleButton';
import Container from '../../hoc/Container/Container';
import Filters from './Filters/Filters';
import classes from './MedicalCardPage.module.scss';
import PetsList from './PetsList/PetsList';

const MedicalCardPage = () => (
  <div className={classes.MedicalCardPage}>
    <Container>
      <Filters />
      <div className={classes.buttonMain}>
        <ToggleButtons />
      </div>
      <PetsList />
    </Container>
  </div>
);

export default MedicalCardPage;
