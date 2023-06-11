import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { useDispatch } from 'react-redux';
import { ReactComponent as SignUp } from '../assets/SignUp.svg';
import classes from './NavBar.module.scss';
import { setIsWindowOpen } from '../../../redux/appointment/appointment';
import App from '../../App/App';

const NavBar = () => {
  const [value, setValue] = useState('/');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(setIsWindowOpen(true));
  };
  const location = useLocation().pathname.split('/')[1];
  useEffect(() => {
    setValue(`/${location}`);
  }, [<App />]);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <div className={classes.NavBar}>
      <div className={classes.pages}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Главная" value="/" />
          <Tab label="Питомцы" value="/PetsPage" />
          <Tab label="Медкарта" value="/MedicalCardPage" />
          <Tab label="Записи" value="/RecordsPage" />
        </Tabs>
      </div>
      <Button
        onClick={clickHandler}
        className={classes.button}
        variant="contained"
        startIcon={<SignUp />}
      >
        Записаться онлайн
      </Button>
    </div>
  );
};

export default NavBar;
