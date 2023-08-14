import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Recipe from "./Pages/Recipe";
import Restaurants from "./Pages/Restaurants";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/recipes" element={<Recipe/>} />
      <Route path="/restaurants" element={<Restaurants/>} />
    </Routes>
  </>
  );
}

export default App;
