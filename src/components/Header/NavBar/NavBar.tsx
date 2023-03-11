import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { ReactComponent as SignUp } from '../assets/SignUp.svg';
import classes from './NavBar.module.scss';

const NavBar = () => {
  const [value, setValue] = useState('/');
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };
  return (
    <div className={classes.NavBar}>
      <div className={classes.pages}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Главная" value="/" />
          <Tab label="Медкарта" value="/MedicalCardPage" />
          <Tab label="Питомцы" value="/PetsPage" />
          <Tab label="Записи" value="/RecordsPage" />
        </Tabs>
      </div>
      <Button
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
