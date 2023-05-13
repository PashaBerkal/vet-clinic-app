import { useAppSelector } from '../../../../hooks/redux';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classes from './Contacts.module.scss';

const Contacts = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    <div className={classes.Contacts} style={!isAuth ? { justifyContent: 'space-between', width: '100%' } : { width: '50%' }}>
      <div className={classes.logo}>
        <Logo />
        <div className={classes.logoText}>
          ВСЕ ВИДЫ ВЕТЕРИНАРНОЙ
          <br />
          ДИАГНОСТИКИ И ЛЕЧЕНИЯ
        </div>
      </div>
      <div>
        <div className={classes.phoneText}>Телефон для записи</div>
        <a className={classes.phone} href="tel:+79001111212">
          +7 (900) 111-12-12
        </a>
      </div>
    </div>
  );
};

export default Contacts;
