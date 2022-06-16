import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <BrowserRouter>
      <Navbar isLogged={isLogged}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
};

export default App;
