import React from "react";
import Header from "./Components/Header/Header";
import { GlobalStorage } from "./GlobalContext.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardMaker from "./Components/CardMaker/CardMaker";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <GlobalStorage>
        <Routes>
          <Route path="/create" element={<CardMaker />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
};

export default App;
