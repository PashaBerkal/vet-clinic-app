import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import MenuButton from '../../../../common/MenuButton/MenuButton';
import { useAppDispatch } from '../../../../hooks/redux';
import { logOut } from '../../../../redux/auth/authSlice';
import { ReactComponent as Client } from '../../assets/User.svg';
import classes from './User.module.scss';

interface PropsUser {
  name?: string,
  surname?: string,
}

const User: FC<PropsUser> = ({ name, surname }) => {
  const dispatch = useAppDispatch();
  const onChange = () => {
    dispatch(logOut());
  };
  return (
    <div className={classes.User}>
      <div className={classes.client}>
        <Client />
      </div>
      <div>
        {name}
        <br />
        {surname}
      </div>
      <div className={classes.button}>
        <MenuButton options={[{ onChange, value: 'Выход' }]} />
      </div>
    </div>
  );
};

export default User;
