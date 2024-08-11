import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import SignIn from "./pages/SignIn.jsx"
import SignUp from "./pages/SignUp.jsx"
import Project from "./pages/Project.jsx"
import DashBoard from "./pages/Dashboard.jsx"
import Header from "./components/Header.jsx";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/sign-in" element={<SignIn />} />
       <Route path="/sign-up" element={<SignUp />} />
       <Route path= "/dashboard" element={<DashBoard />} />
       <Route path= "/projects" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
