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
    stayNum4: "",
    diceNum5: "",
    stayNum5: "",
    diceNum6: "",
    stayNum6: "",
    displayDices: false,
    displayDices2: false,
    displayDices3: true,
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
    result: [],
    result1: [],
    disableInp1Down: false, disableInp1Free: false, disableInp1Up: false, disableInp1Hand: false,
    oneDown: "", oneFree: "", oneHand: "", oneUp: "",
    disableInp2Down: true, disableInp2Free: false, disableInp2Up: false, disableInp2Hand: false,
    twoDown: "", twoFree: "", twoHand: "", twoUp: "",
    disableInp3Down: true, disableInp3Free: false, disableInp3Up: false, disableInp3Hand: false,
    threeDown: "", threeFree: "", threeHand: "", threeUp: "",
    disableInp4Down: true, disableInp4Free: false, disableInp4Up: false, disableInp4Hand: false,
    fourDown: "", fourFree: "", fourHand: "", fourUp: "",
    disableInp5Down: true, disableInp5Free: false, disableInp5Up: false, disableInp5Hand: false,
    fiveDown: "", fiveFree: "", fiveHand: "", fiveUp: "",
    disableInp6Down: true, disableInp6Free: false, disableInp6Up: false, disableInp6Hand: false,
    sixDown: "", sixFree: "", sixHand: "", sixUp: ""        
  };

  changeDice = () => {
    let diceNum1 = Math.floor(Math.random() * 6) + 1;
    let diceNum2 = Math.floor(Math.random() * 6) + 1;
    let diceNum3 = Math.floor(Math.random() * 6) + 1;
    let diceNum4 = Math.floor(Math.random() * 6) + 1;
    let diceNum5 = Math.floor(Math.random() * 6) + 1;
    let diceNum6 = Math.floor(Math.random() * 6) + 1;

    let result = [diceNum1, diceNum2, diceNum3, diceNum4, diceNum5, diceNum6]

    for (let i = 0; i < result.length; i++) {
      this.sumDices(result[i]);
    }

    this.setState({
      diceNum1: diceNum1,
      diceNum2: diceNum2,
      diceNum3: diceNum3,
      diceNum4: diceNum4,
      diceNum5: diceNum5,
      diceNum6: diceNum6,
      displayDices: true,
      result: result
    });
  };

  secondRoll = (bool2, bool3) => {
     
    let dice1 = this.state.diceNum1;
    if ( dice1 == this.state.stayNum1 ) {
      dice1 = this.state.stayNum1;
    } else {
      dice1 = Math.floor(Math.random() * 6) + 1;
      this.sumDices(dice1);
      this.minusPrev(this.state.diceNum1);
    }
     
    let dice2 = this.state.diceNum2;
    if ( dice2 == this.state.stayNum2 ) {
      dice2 = this.state.stayNum2;
    } else {
      dice2 = Math.floor(Math.random() * 6) + 1;
      this.sumDices(dice2);
      this.minusPrev(this.state.diceNum2);
    }
    
    let dice3 = this.state.diceNum3;
    if ( dice3 == this.state.stayNum3 ) {
      dice3 = this.state.stayNum3;
    } else {
      dice3 = Math.floor(Math.random() * 6) + 1;
      this.sumDices(dice3);
      this.minusPrev(this.state.diceNum3);
    }

    let dice4 = this.state.diceNum4;
    if ( dice4 == this.state.stayNum4 ) {
      dice4 = this.state.stayNum4;
    } else {
      dice4 = Math.floor(Math.random() * 6) + 1;
      this.sumDices(dice4);
      this.minusPrev(this.state.diceNum4);
    }
    
    let dice5 = this.state.diceNum5;
    if ( dice5 == this.state.stayNum5 ) {
      dice5 = this.state.stayNum5;
      console.log(this.state.stayNum5);
    } else {
      dice5 = Math.floor(Math.random() * 6) + 1;
      this.sumDices(dice5);
      this.minusPrev(this.state.diceNum5);
    }

    let dice6 = this.state.diceNum6;
    if ( dice6 == this.state.stayNum6 ) {
      dice6 = this.state.stayNum6;
    } else {
      dice6 = Math.floor(Math.random() * 6) + 1;
      this.sumDices(dice6);
      this.minusPrev(this.state.diceNum6);
    };
    
    let result = [dice1, dice2, dice3, dice4, dice5, dice6];
    

    console.log(result);
    this.setState({
      diceNum1: dice1,
      diceNum2: dice2,
      diceNum3: dice3,
      diceNum4: dice4,
      diceNum5: dice5,
      diceNum6: dice6,
      displayDices2: bool2,
      displayDices3: bool3
    });
  };

  sumDices = number => {
    switch (number) {
      case 1:
        if(this.state.sumOne <= 5) {
          return (this.state.sumOne = this.state.sumOne + 1)
        }
      case 2:
        if(this.state.sumTwo <= 10) {
          return (this.state.sumTwo = this.state.sumTwo + 2)
        }
      case 3:
        if(this.state.sumThree <= 15) {
          return (this.state.sumThree = this.state.sumThree + 3);
        }
      case 4:
        if(this.state.sumFour <= 20) {
          return (this.state.sumFour = this.state.sumFour + 4);
        }
      case 5:
        if(this.state.sumFive <= 25) {
          return (this.state.sumFive = this.state.sumFive + 5);
        }
      case 6:
        if(this.state.sumSix <= 30) {
          return (this.state.sumSix = this.state.sumSix + 6);
        }
    }
  };
  minusPrev = number => {
    switch (number) {
      case 1:
        return (this.state.sumOne = this.state.sumOne - 1);
      case 2:
        return (this.state.sumTwo = this.state.sumTwo - 2);
      case 3:
        return (this.state.sumThree = this.state.sumThree - 3);
      case 4:
        return (this.state.sumFour = this.state.sumFour - 4);
      case 5:
        return (this.state.sumFive = this.state.sumFive - 5);
      case 6:
        return (this.state.sumSix = this.state.sumSix - 6);
    }  
  }
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
  newRoll = () => {
    this.dicesZero();
    this.setState({
      displayDices: false,
      displayDices2: false,
      displayDices3: true,
      stay1: false,
      stay2: false,
      stay3: false,
      stay4: false,
      stay5: false,
      stay6: false
    })
  }
  stayInGame = (num, val) => {
    this.setState({
      ["stay" + num]: true,
      ["stayNum" + num]: val
      
    });
  };
  gameAgain = (num) => {
    this.setState({
      ["stay" + num]: false,
      ["stayNum" + num]: Math.floor(Math.random() * 6) + 1
    });
  };
  disableInput = (val, num, pos, num2, num3) => {
    this.newRoll();
    this.setState({
      ["disableInp" + num + pos]: true,
      [num2 + pos]: val,
      ["disableInp" + num3 + pos]: false
    })
  }
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          changeDice: this.changeDice,
          stayInGame: this.stayInGame,
          gameAgain: this.gameAgain,
          secondRoll: this.secondRoll,
          newRoll: this.newRoll,
          disableInput: this.disableInput
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
