import HeaderInfo from './HeaderInfo';
import NavBar from './NavBar';
import Container from '../../hoc/Container';
import classes from './Header.module.scss';

const Header = () => (
  <div className={classes.Header}>
    <Container>
      <HeaderInfo />
    </Container>
    <div className={classes.line} />
    <Container>
      <NavBar />
    </Container>
  </div>
);

export default Header;
