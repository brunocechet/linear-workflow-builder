import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import Home from './pages/home'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/builder"></Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  </Router>
)

export default Routes
