import React, { Component } from "react";

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
                          border: "1px solid #333",
                          borderRadius: "5px",
                          boxShadow: "4px 4px 6px grey"
                        }
                      : null
                  }
                  onClick={() => value.stayInGame(1, value.diceNum1)}
                  onDoubleClick={() => value.gameAgain(1)}
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
                          border: "1px solid #333",
                          borderRadius: "5px",
                          boxShadow: "4px 4px 6px grey"
                        }
                      : null
                  }
                  onClick={() => value.stayInGame(2, value.diceNum2)}
                  onDoubleClick={() => value.gameAgain(2)}
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
                          border: "1px solid #333",
                          borderRadius: "5px",
                          boxShadow: "4px 4px 6px grey"
                        }
                      : null
                  }
                  onClick={() => value.stayInGame(3, value.diceNum3)}
                  onDoubleClick={() => value.gameAgain(3)}
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
                          border: "1px solid #333",
                          borderRadius: "5px",
                          boxShadow: "4px 4px 6px grey"
                        }
                      : null
                  }
                  onClick={() => value.stayInGame(4, value.diceNum4)}
                  onDoubleClick={() => value.gameAgain(4)}
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
                          border: "1px solid #333",
                          borderRadius: "5px",
                          boxShadow: "4px 4px 6px grey"
                        }
                      : null
                  }
                  onClick={() => value.stayInGame(5, value.diceNum5)}
                  onDoubleClick={() => value.gameAgain(5)}
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
                          border: "1px solid #333",
                          borderRadius: "5px",
                          boxShadow: "4px 4px 6px grey"
                        }
                      : null
                  }
                  onClick={() => value.stayInGame(6, value.diceNum6)}
                  onDoubleClick={() => value.gameAgain(6)}
                  src={
                    value.stay6
                      ? value.dices[value.stayNum6 - 1]
                      : value.dices[value.diceNum6 - 1]
                  }
                  alt="dice Six"
                />
              </div>
            ) : null}

            <button
              onClick={() => value.changeDice(true, false, false)}
              disabled={value.displayDices}
            >
              Roll first
            </button>
            <button
              onClick={() => value.changeDice(true, true, false)}
              disabled={value.displayDices2}
            >
              Roll second
            </button>
            <button
              onClick={() => value.changeDice(true, true, true)}
              disabled={value.displayDices3}
            >
              Final roll
            </button>
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
