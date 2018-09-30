import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import "./App.css";
import Dashboard from './components/Dashboard';
import { createAppStore } from './store/index'
import { Provider } from 'react-redux'

const store = createAppStore();

const App = (
  <Provider store={store} >
    < Router >
      <Switch>
        <Route path="/Dashboard" component={Dashboard} />

        <Redirect from='/' to='/Dashboard' />
      </Switch>
    </Router >
  </Provider>
)

export default App