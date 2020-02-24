import React, { Component } from "react";
import { ProductConsumer } from "./../../Context.js";
import ButtonContainer from "./../Button.js";

export default class gameEnd extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div>
            {value.disableAll ? (
              <div className="game-end">
                <div className="end-modal">
                  <h3>end of game</h3>
                  <p>
                    your score:{" "}
                    <span>
                      {value.sumFirstAll + value.calcSecAll + value.sumLastAll}
                    </span>
                  </p>
                  <ButtonContainer onClick={value.newGame}>
                    new game
                  </ButtonContainer>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </ProductConsumer>
    );
  }
}
