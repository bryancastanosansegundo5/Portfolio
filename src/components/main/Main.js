import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Habilidades from "./Habilidades";
import Contacto from "./Contacto";
import Descargarcv from "./Descargarcv";
import Proyectos from "./Proyectos";
import Home from "./Home";
import "../../styles/styles.css";


class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/proyectos" component={Proyectos} />
          
          <Route exact path="/habilidades" component={Habilidades} />
          <Route exact path="/contacto" component={Contacto} />
          {/* <Route exact path="/descargarCV" component={Descargarcv} /> */}
        </Switch>
      </main>
    );
  }
}

export default Main;
