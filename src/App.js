import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Inicio from "./componentes/inicio";
import Footer from "./componentes/footer";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Inicio />}></Route>
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
