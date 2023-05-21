import { Routes, Route } from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import MainPage from '../../pages/MainPage';
import MedicalCardPage from '../../pages/MedicalCardPage';
import PetsPage from '../../pages/PetsPage';
import RecordsPage from '../../pages/RecordsPage';
import AuthPage from '../../pages/AuthPage/AuthPage';
import PrivateWrapper from '../../common/PrivateWrapper';
import CardPet from '../../pages/CardPet/CardPet';
import { useAppSelector } from '../../hooks/redux';
import OnlineAppointment from '../OnlineAppointment/OnlineAppointment';

const App = () => {
  const { isWindowOpen } = useAppSelector((state) => state.appointment);
  const routes: JSX.Element = (
    <Routes>
      <Route element={<PrivateWrapper />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/MedicalCardPage" element={<MedicalCardPage />} />
        <Route path="/PetsPage" element={<PetsPage />} />
        <Route path="/PetsPage/:id" element={<CardPet />} />
        <Route path="/RecordsPage" element={<RecordsPage />} />
      </Route>
      <Route path="/Auth" element={<AuthPage />} />
    </Routes>
  );
  return (
    <>
      <Layout>{routes}</Layout>
      <OnlineAppointment visible={isWindowOpen} />
    </>
  );
};

export default App;
