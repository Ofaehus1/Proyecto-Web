import NavBar from "./componentes/NavBar";
import "./App.css";
import React from "react";
import Inicio from "./componentes/inicio";
import Footer from "./componentes/footer";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Inicio />
      <Footer />
    </React.Fragment>
  );
}

export default App;
