import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import "./App.css";
import Dashboard from './components/Dashboard';


const App = (

    < Router >
      <Switch>
        <Route path="/Dashboard" component={Dashboard} />

        <Redirect from='/' to='/Dashboard' />
      </Switch>
    </Router >
  )

export default App