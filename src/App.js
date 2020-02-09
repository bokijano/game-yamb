import React, { Component } from "react";
import "./App.css";
import Player from "./components/player/Player.js";
import Dices from "./components/dices/Dices";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="display-dices">
          <Dices />
        </div>
        <div className="player-two">
          <Player />
        </div>
      </div>
    );
  }
}

export default App;
