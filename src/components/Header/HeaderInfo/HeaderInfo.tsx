import Contacts from './Contacts';
import User from './User';
import { useAppSelector } from '../../../hooks/redux';
import classes from './HeaderInfo.module.scss';

const HeaderInfo = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    <div className={classes.HeaderInfo}>
      {isAuth
        ? (
          <>
            <Contacts />
            <User />
          </>
        )
        : (
          <Contacts />
        )}
    </div>
  );
};

export default HeaderInfo;
