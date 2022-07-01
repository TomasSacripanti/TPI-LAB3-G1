import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contents from "./pages/Contents";
import AddContent from "./pages/AddContent";
import PopularContent from "./pages/PopularContent";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ThemeContextProvider } from "./context/ThemeContext";
import { LoginContextProvider } from "./context/LoginContext";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <LoginContextProvider>
          <Navbar/>
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Navigate replace to="/login" />}
              ></Route>
              <Route path="/contents" element={<Contents />}></Route>
              <Route path="/contents/add" element={<AddContent />}></Route>
              <Route
                path="/contents/popular"
                element={<PopularContent />}
              ></Route>
              <Route
                path="/login"
                element={<Login/>}
              ></Route>
              <Route path="/register" element={<Register />}></Route>
            </Routes>
          </div>
        </LoginContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;
