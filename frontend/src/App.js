import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Reviews from "./pages/Reviews";
import CreateReview from "./pages/CreateReview";
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
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/add" element={<CreateReview />}></Route>
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
