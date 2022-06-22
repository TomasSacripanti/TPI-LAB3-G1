import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contents from "./pages/Contents";
import AddContent from "./pages/AddContent";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <>
      <Navbar isLogged={isLogged} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />}></Route>
          <Route path="/contents" element={<Contents />}></Route>
          <Route path="/add" element={<AddContent />}></Route>
          <Route
            path="/login"
            element={<Login setIsLogged={setIsLogged} />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
