import React, { Component } from "react";
import ButtonContainer from "./../Button.js"

import { ProductConsumer } from "./../../Context";

export default class Dices extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div className="game">
            {value.displayDices ? (
              <div className="dices">
                <img
                  style={
                    value.stay1
                      ? {
                          border: "2px solid #333",
                          borderRadius: "10px",
                          boxShadow: "4px 4px 6px grey"
                        }
                      : null
                  }
                  onClick={() => value.stayInGame(1, value.diceNum1)}
                  onDoubleClick={() => value.gameAgain(1, value.stayNum1)}
                  src={
                    value.stay1
                      ? value.dices[value.stayNum1 - 1]
                      : value.dices[value.diceNum1 - 1]
                  }
                  alt="dice One"
                />
                <img
                  style={
                    value.stay2
                      ? {
                          border: "2px solid #333",
                          borderRadius: "10px",
                          boxShadow: "4px 4px 6px grey"
                        }
                      : null
                  }
                  onClick={() => value.stayInGame(2, value.diceNum2)}
                  onDoubleClick={() => value.gameAgain(2, value.stayNum2)}
                  src={
                    value.stay2
                      ? value.dices[value.stayNum2 - 1]
                      : value.dices[value.diceNum2 - 1]
                  }
                  alt="dice Two"
                />

                <img
                  style={
                    value.stay3
                      ? {
                          border: "2px solid #333",
                          borderRadius: "10px",
                          boxShadow: "4px 4px 6px grey"
                        }
                      : null
                  }
                  onClick={() => value.stayInGame(3, value.diceNum3)}
                  onDoubleClick={() => value.gameAgain(3, value.stayNum3)}
                  src={
                    value.stay3
                      ? value.dices[value.stayNum3 - 1]
                      : value.dices[value.diceNum3 - 1]
                  }
                  alt="dice Three"
                />
                <img
                  style={
                    value.stay4
                      ? {
                          border: "2px solid #333",
                          borderRadius: "10px",
                          boxShadow: "4px 4px 6px grey"
                        }
                      : null
                  }
                  onClick={() => value.stayInGame(4, value.diceNum4)}
                  onDoubleClick={() => value.gameAgain(4, value.stayNum4)}
                  src={
                    value.stay4
                      ? value.dices[value.stayNum4 - 1]
                      : value.dices[value.diceNum4 - 1]
                  }
                  alt="dice Four"
                />
                <img
                  style={
                    value.stay5
                      ? {
                          border: "2px solid #333",
                          borderRadius: "10px",
                          boxShadow: "4px 4px 6px grey"
                        }
                      : null
                  }
                  onClick={() => value.stayInGame(5, value.diceNum5)}
                  onDoubleClick={() => value.gameAgain(5, value.stayNum5)}
                  src={
                    value.stay5
                      ? value.dices[value.stayNum5 - 1]
                      : value.dices[value.diceNum5 - 1]
                  }
                  alt="dice Five"
                />
                <img
                  style={
                    value.stay6
                      ? {
                          border: "2px solid #333",
                          borderRadius: "10px",
                          boxShadow: "4px 4px 6px grey"
                        }
                      : null
                  }
                  onClick={() => value.stayInGame(6, value.diceNum6)}
                  onDoubleClick={() => value.gameAgain(6, value.stayNum6)}
                  src={
                    value.stay6
                      ? value.dices[value.stayNum6 - 1]
                      : value.dices[value.diceNum6 - 1]
                  }
                  alt="dice Six"
                />
              </div>
            ) : null}

            <ButtonContainer
              onClick={value.changeDice}
              disabled={value.displayDices}
            >
              first roll
            </ButtonContainer>
            <ButtonContainer
              onClick={() => value.secondRoll(true, false)}
              disabled={value.displayDices2}
            >
              second roll
            </ButtonContainer>
            <ButtonContainer
              onClick={() => value.secondRoll(true, true)}
              disabled={value.displayDices3}
            >
              Final roll
            </ButtonContainer>

            <ButtonContainer onClick={value.newRoll}>
              Roll again
            </ButtonContainer>

            <p>
              1: <span>{value.sumOne}</span>
            </p>
            <p>
              2: <span>{value.sumTwo}</span>
            </p>
            <p>
              3: <span>{value.sumThree}</span>
            </p>
            <p>
              4: <span>{value.sumFour}</span>
            </p>
            <p>
              5: <span>{value.sumFive}</span>
            </p>
            <p>
              6: <span>{value.sumSix}</span>
            </p>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
