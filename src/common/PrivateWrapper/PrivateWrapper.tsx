import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

const PrivateWrapper = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  return isAuth ? <Outlet /> : <Navigate to="/Auth" />;
};

export default PrivateWrapper;
