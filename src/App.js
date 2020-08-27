import React from "react";
import "./App.css";
import Navegacion from "./components/Navegacion/Navegacion";
import Home from "./components/Home/Home";
import Proyectos from "./components/Proyectos/Proyectos";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <div className="App">
      <Navegacion />
      <Home />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;
