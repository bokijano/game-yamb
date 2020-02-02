import React, { Component } from "react";
import DiceOne from "./components/dice-pictures/dice1.png";
import DiceTwo from "./components/dice-pictures/dice2.png";
import DiceThree from "./components/dice-pictures/dice3.png";
import DiceFour from "./components/dice-pictures/dice4.png";
import DiceFive from "./components/dice-pictures/dice5.png";
import DiceSix from "./components/dice-pictures/dice6.png";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    dices: [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix],
    diceNum1: "",
    stayNum1: "",
    diceNum2: "",
    stayNum2: "",
    diceNum3: "",
    stayNum3: "",
    diceNum4: "",
    diceNum5: "",
    diceNum6: "",
    displayDices: false,
    displayDices2: false,
    displayDices3: false,
    stay1: false,
    stay2: false,
    stay3: false,
    stay4: false,
    stay5: false,
    stay6: false,
    sumOne: 0,
    sumTwo: 0,
    sumThree: 0,
    sumFour: 0,
    sumFive: 0,
    sumSix: 0,
    result: []
  };
  changeDice = (bool, bool2, bool3) => {
    let diceNum1 = Math.floor(Math.random() * 6) + 1;
    let diceNum2 = Math.floor(Math.random() * 6) + 1;
    let diceNum3 = Math.floor(Math.random() * 6) + 1;
    let diceNum4 = Math.floor(Math.random() * 6) + 1;
    let diceNum5 = Math.floor(Math.random() * 6) + 1;
    let diceNum6 = Math.floor(Math.random() * 6) + 1;

    this.sumDices(diceNum1);
    this.sumDices(diceNum2);
    this.sumDices(diceNum3);
    this.sumDices(diceNum4);
    this.sumDices(diceNum5);
    this.sumDices(diceNum6);

    this.setState({
      diceNum1: diceNum1,
      diceNum2: diceNum2,
      diceNum3: diceNum3,
      diceNum4: diceNum4,
      diceNum5: diceNum5,
      diceNum6: diceNum6,
      displayDices: bool,
      displayDices2: bool2,
      displayDices3: bool3
    });
  };

  sumDices = number => {
    switch (number) {
      case 1:
        return (this.state.sumOne = this.state.sumOne + 1);
      case 2:
        return (this.state.sumTwo = this.state.sumTwo + 2);
      case 3:
        return (this.state.sumThree = this.state.sumThree + 3);
      case 4:
        return (this.state.sumFour = this.state.sumFour + 4);
      case 5:
        return (this.state.sumFive = this.state.sumFive + 5);
      case 6:
        return (this.state.sumSix = this.state.sumSix + 6);
    }
  };
  dicesZero = () => {
    this.setState({
      sumOne: 0,
      sumTwo: 0,
      sumThree: 0,
      sumFour: 0,
      sumFive: 0,
      sumSix: 0
    });
  };
  stayInGame = (num, val) => {
    this.setState({
      ["stay" + num]: true,
      ["stayNum" + num]: val
    });
  };
  gameAgain = num => {
    this.setState({
      ["stay" + num]: false
    })
  }
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          changeDice: this.changeDice,
          stayInGame: this.stayInGame,
          gameAgain: this.gameAgain
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
