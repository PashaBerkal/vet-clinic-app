import { Routes, Route } from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import MainPage from '../../pages/MainPage';
import MedicalCardPage from '../../pages/MedicalCardPage';
import PetsPage from '../../pages/PetsPage';
import RecordsPage from '../../pages/RecordsPage';
import CardPet from '../../pages/CardPet/CardPet';

const App = () => {
  const routes: JSX.Element = (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/MedicalCardPage" element={<MedicalCardPage />} />
      <Route path="/PetsPage" element={<PetsPage />} />
      <Route path="/PetsPage/:id" element={<CardPet />} />
      <Route path="/RecordsPage" element={<RecordsPage />} />
    </Routes>
  );
  return (
    <Layout>
      {routes}
    </Layout>
  );
};

export default App;
