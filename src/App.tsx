import React from 'react';
import {HashRouter as Router, Link, Route, Switch, useParams} from "react-router-dom";
import cat from './Noto_Emoji_Pie_1f408.svg';
import couch from './Noto_Emoji_Pie_1f6cb.svg'
import './App.css';

function Card() {
  let { cardNumber } = useParams();

  return (
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h1>Number: {cardNumber}</h1>
          </div>
          <div className="card-back">
            <div style={{border: "3px solid #73AD21", position: "absolute", left: "10%", top: "15%", width: "80%"}}>
              <img src={couch} alt="couch" style={{width: "100%"}}/>
            </div>
            <div style={{border: "3px solid #73AD21", position: "absolute", left: "45%", top: "72%", width: "10%"}}>
              <img src={cat} alt="cat" style={{width: "100%"}}/>
            </div>
          </div>
        </div>
      </div>
  );
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
              <p>
                Übung für Präpositionen
              </p>
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
