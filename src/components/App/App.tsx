import { Routes, Route } from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import MainPage from '../../pages/MainPage';
import MedicalCardPage from '../../pages/MedicalCardPage';
import PetsPage from '../../pages/PetsPage';
import RecordsPage from '../../pages/RecordsPage';
import AuthPage from '../../pages/AuthPage/AuthPage';

const App = () => {
  const routes: JSX.Element = (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/MedicalCardPage" element={<MedicalCardPage />} />
      <Route path="/PetsPage" element={<PetsPage />} />
      <Route path="/RecordsPage" element={<RecordsPage />} />
      <Route path="/Auth" element={<AuthPage />} />

    </Routes>
  );
  return (
    <Layout>
      {routes}
    </Layout>
  );
};

export default App;
