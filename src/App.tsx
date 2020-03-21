import React from 'react';
import {HashRouter as Router, Link, Route, Switch, useParams} from "react-router-dom";
import cat from './Noto_Emoji_Pie_1f408.svg';
import couch from './Noto_Emoji_Pie_1f6cb.svg'
import logo from './logo.svg';
import './App.css';

function Card() {
  let { cardNumber } = useParams();

  return (<div className="App">
    <header className="App-header">
      <p>
        Number: {cardNumber}
      </p>
      <img src={cat} className="cat" alt="cat" />
      <img src={couch} className="couch" alt="couch" />
    </header>
  </div>);
}

function App() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Default</Link>
            </li>
            <li>
              <Link to="/card/1">Card 1</Link>
            </li>
            <li>
              <Link to="/card/2">Card 2</Link>
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
            <Route path="/card/:cardNumber">
              <Card/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
