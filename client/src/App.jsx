import React from "react";
import Header from "./Components/Header/Header";
import { GlobalStorage } from "./GlobalContext.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardMaker from "./Components/CardMaker/CardMaker";
import AllCards from "./Components/AllCards/AllCards";
import Card from "./Components/AllCards/Card";
import Home from "./Home";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <GlobalStorage>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="create" element={<CardMaker />} />
              <Route path="cards" element={<AllCards />} />
              <Route path="cards/:id" element={<Card />} />
            </Routes>
          </GlobalStorage>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
