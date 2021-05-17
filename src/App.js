import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navegacion from "./components/common/Navegacion";
//import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacto from "./components/Contacto";
import Prueba from "./components/Prueba";

function App() {
  return (
    <Router>
      <Navegacion> </Navegacion> {/* Navegacion */}
      {/*Usaremos operador ternario para mostrar barra de navAdmin o NavNormal*/}
      <Switch>
        <Route exact path="/">
          <Prueba></Prueba>
          {/*  <PaginaPrincipal /> */}
        </Route>
        <Route exact path="/contacto">
        <Contacto/>
        </Route>
      </Switch>
      {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;
