import React from "react";
//Componentes
import Home from "./components/Home";
import Login from "./components/Login";
//Funciones Helpers
import ProtectedRoute from "./helpers/ProtectedRoute";

//Librerias
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path= '/Login' component={Login}/>
        <ProtectedRoute exact path= '/' component= {Home}/>
        <Route exact path= '*' component= {()=> "404"}/>
    
      </Switch>
      </Router>
  );
};
export default App;


//TODAS LAS PAGINAS TIENEN COMO PROPS (HISTORY, LOCATION Y MATCH POR DEFECTO)