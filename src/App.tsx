import React from 'react';
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Default</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>

          <hr/>

          <Switch>
            <Route exact path="/">
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.tsx</code> and save to reload. A test change!
                  </p>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </div>
            </Route>
            <Route path="/test">
              <div className="App">
                <header className="App-header">
                  <p>
                    Test!
                  </p>
                </header>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
