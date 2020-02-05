import React, { Component } from "react";
import "./App.css";
import PlayerOne from "./components/player One/PlayerOne.js";
import PlayerTwo from "./components/player Two/PlayerTwo.js";
import Dices from "./components/dices/Dices";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="display-dices">
          <Dices />
        </div>
        <div className="player-two">
          <PlayerTwo />
        </div>
      </div>
    );
  }
}

export default App;
