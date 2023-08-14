import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    <Navigation />
  </>
  );
}

export default App;
