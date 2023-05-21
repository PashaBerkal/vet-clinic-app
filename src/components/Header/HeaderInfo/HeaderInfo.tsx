import { useEffect } from 'react';
import Contacts from './Contacts';
import User from './User';
import { useAppSelector } from '../../../hooks/redux';
import classes from './HeaderInfo.module.scss';
import { useFetchUserQuery } from '../../../redux/auth/authApiSlice';

const HeaderInfo = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const { data: user, isError, isLoading, refetch } = useFetchUserQuery('');
  useEffect(() => {
    refetch();
  }, [isAuth]);
  return (
    <div className={classes.HeaderInfo}>
      {isLoading && <p>загрузка...</p>}
      {isError && <p>Произошла ошибка</p>}
      {isAuth
        ? (
          <>
            <Contacts />
            <User name={user?.name} surname={user?.surname} />
          </>
        )
        : (
          <Contacts />
        )}
    </div>
  );
};

export default HeaderInfo;
