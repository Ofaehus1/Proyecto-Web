import NavBar from "./componentes/NavBar";
import "./App.css";
import React from "react";
import Inicio from "./componentes/inicio";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Inicio />
    </React.Fragment>
  );
}

export default App;
