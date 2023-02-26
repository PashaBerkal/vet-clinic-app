import classes from './NavBar.module.scss'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className={classes.NavBar}>
      <Link to='/'>Главная</Link>
      <Link to='/MedicalCardPage'>Медкарта</Link>
      <Link to='/PetsPage'>Питомцы</Link>
      <Link to='/RecordsPage'>Записи</Link>
    </div>
  );
}

export default NavBar;