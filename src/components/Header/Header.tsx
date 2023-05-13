import HeaderInfo from './HeaderInfo';
import NavBar from './NavBar';
import Container from '../../hoc/Container';
import classes from './Header.module.scss';
import { useAppSelector } from '../../hooks/redux';

const Header = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  return (

    <div>
      {isAuth
        ? (
          <div className={classes.Header}>
            <Container>
              <HeaderInfo />
            </Container>
            <div className={classes.line} />
            <Container>
              <NavBar />
            </Container>
          </div>
        )
        : (
          <div className={classes.HeaderAuth}>
            <Container>
              <HeaderInfo />
            </Container>
          </div>
        )}
    </div>
  );
};

export default Header;
