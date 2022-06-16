import "./App.css";

import { Route, Routes, Navigate } from 'react-router-dom';

import MainPage from "./pages/MainPage";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/main'/>}></Route>
      <Route path='/main' element={<MainPage />}></Route>
    </Routes>
  );
}

export default App;
