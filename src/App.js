import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as ROUTES from './constants/router';
import {Home,Browse,Signin,Signup} from "./Pages";

export default function App() {
  return (
    <Router>
      <Route exact path="/browse">
        <Browse/>
      </Route>
      <Route exact path="/signin">
        <Signin/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home/>
      </Route>
    </Router>
  );
}
