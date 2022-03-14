import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./Routes/search/Search";
import Test from "./Routes/test/Test";
import Login from "./Routes/login/Login";
import Signup from "./Routes/signup/Signup";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route path="test" element={<Test />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
