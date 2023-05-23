import { useEffect } from 'react';
import Contacts from './Contacts';
import User from './User';
import { useAppSelector } from '../../../hooks/redux';
import { useFetchUserQuery } from '../../../redux/auth/authApiSlice';
import classes from './HeaderInfo.module.scss';

const HeaderInfo = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const { data: user, isError, isLoading, refetch } = useFetchUserQuery('');
  useEffect(() => {
    refetch();
  }, [isAuth]);
  return (
    <div className={classes.HeaderInfo}>
      {isAuth
        ? (
          <>
            {isLoading && <p>загрузка...</p>}
            {isError && <p>Произошла ошибка</p>}
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
