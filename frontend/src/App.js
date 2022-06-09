import "./App.css";

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import MainPage from "./pages/MainPage";


function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<Navigate replace to='/main'/>}></Route>
      <Route path='/main' element={<MainPage />}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
