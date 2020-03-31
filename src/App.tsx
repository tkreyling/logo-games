import React, {useState} from 'react';
import {HashRouter as Router, Link, Route, Switch, useParams} from "react-router-dom";
import cat from './Noto_Emoji_Pie_1f408.svg';
import couch from './Noto_Emoji_Pie_1f6cb.svg'
import './App.css';

const cards = [
  {
    couch: {left: "10%", top: "15%", width: "80%"},
    cat: {left: "45%", top: "72%", width: "10%"},
    text: "Die Katze sitzt unter dem Sofa."
  },
  {
    couch: {left: "10%", top: "15%", width: "80%"},
    cat: {left: "45%", top: "59%", width: "10%"},
    text: "Die Katze sitzt auf dem Sofa."
  }
];

function Card() {
  let { cardNumber } = useParams();
  let card = cards[parseInt(cardNumber || "0") % cards.length];
  let [isFlipped, setFlipped] = useState(false);

  return (
      <div className="card" onClick={(_) => {setFlipped(!isFlipped)}}>
        <div className={"card-inner" + (isFlipped ? " is-flipped" : "")}>
          <div className="card-front">
            <h1>Number: {cardNumber}</h1>
          </div>
          <div className="card-back">
            <div style={{border: "3px solid #73AD21", position: "absolute", ...card.couch}}>
              <img src={couch} alt="couch" style={{width: "100%"}}/>
            </div>
            <div style={{border: "3px solid #73AD21", position: "absolute", ...card.cat}}>
              <img src={cat} alt="cat" style={{width: "100%"}}/>
            </div>
            <div style={{border: "3px solid #73AD21", position: "absolute", textAlign: "center", left: "10%", top: "90%", width: "80%"}}>
              {card.text}
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
              <Link to="/card/0">Card 1</Link>
            </li>
            <li>
              <Link to="/card/1">Card 2</Link>
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
