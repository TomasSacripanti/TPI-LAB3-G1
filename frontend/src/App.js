import "./App.css";

import { Route, Routes, Navigate } from 'react-router-dom';

import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";


function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Navigate replace to='/login'/>}></Route>
      <Route path='/main' element={<MainPage />}></Route>
      <Route path='/login' element={<LogIn />}></Route>
      <Route path='/register' element={<Register />}></Route>

    </Routes>
    
    
  );
}

export default App;
