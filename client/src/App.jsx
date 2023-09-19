import React from "react";
import Header from "./Components/Header";
import CardComponent from "./Components/CardMaker/CardComponent";
import FormDoido from "./FormDoido";
import { GlobalStorage } from "./GlobalContext.jsx";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <GlobalStorage>
        <main className="container containerCard">
          <CardComponent />
          <FormDoido />
        </main>
      </GlobalStorage>
    </div>
  );
};

export default App;
