import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import './index.css';
import AppWithHooks from './AppWithHooks';
import AppWithoutHooks from './AppWithoutHooks'
import * as serviceWorker from './serviceWorker';
import store from './redux';
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store} >
        <Link to="/appwithhooks">
          <header>App With Hooks</header>
        </Link>
        <Link to="/appwithouthooks">
          <header>App Without Hooks</header>
        </Link>
        <Switch>
          <Route path="/appwithhooks">
            <AppWithHooks />
          </Route>
          <Route path="/appwithouthooks">
            <AppWithoutHooks />
          </Route>

        </Switch>
      </Provider>
      </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
