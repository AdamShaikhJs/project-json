import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import AllData from "./components/alldata";
import AddData from "./components/adddata";
import EditData from "./components/editdata";
import Form from "./components/form";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./components/notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/all" component={AllData} />
          <Route exact path="/add" component={AddData} />
          <Route exact path="/edit/:id" component={EditData} />
          <Route exact path="/form" component={Form} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
