import Layout from '../../hoc/Layout/Layout';
import {Routes, Route, Link} from 'react-router-dom'
import classes from './App.module.scss'
import MainPage from '../../pages/MainPage';
import MedicalCardPage from '../../pages/MedicalCardPage';
import PetsPage from '../../pages/PetsPage';
import RecordsPage from '../../pages/RecordsPage';

function App() {
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
