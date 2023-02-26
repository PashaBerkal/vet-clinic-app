import {Link} from 'react-router-dom'
import classes from './NavBar.module.scss'

const NavBar = () => {
  return (
    <div>
      <Link className={classes.link} to='/'>Главная</Link>
      <Link className={classes.link} to='/MedicalCardPage'>Медкарта</Link>
      <Link className={classes.link} to='/PetsPage'>Питомцы</Link>
      <Link className={classes.link} to='/RecordsPage'>Записи</Link>
    </div>
  );
}

export default NavBar;