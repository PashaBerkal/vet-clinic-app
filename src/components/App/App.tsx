import Layout from '../../hoc/Layout/Layout';
import {Routes, Route } from 'react-router-dom'
import MainPage from '../../pages/MainPage';
import MedicalCardPage from '../../pages/MedicalCardPage';
import PetsPage from '../../pages/PetsPage';
import RecordsPage from '../../pages/RecordsPage';

const App = () => {
  let routes = (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/MedicalCardPage' element={<MedicalCardPage/>}/>
      <Route path='/PetsPage' element={<PetsPage/>}/>
      <Route path='/RecordsPage' element={<RecordsPage/>}/>
      {/* <Route path='*' element={<NoteFoundPage/>}/> */}
    </Routes>
  )
  return (
    <Layout>
      {routes}
    </Layout>
  );
}

export default App;
