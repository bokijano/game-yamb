import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";

export default class RowOne extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%" }} className="row">
            <p className="col-1">1</p>
            
            <input
              onClick={() => value.disableInput(value.sumOne, 1, "Down", "one", 2)}
              onDoubleClick={() => value.undoMove(value.sumOne, 1, "Down", "one", 2)}
              className="col-inp"
              type="submit"
              name="name"
              disabled={value.disableInp1Down}
              value={
                value.disableInp1Down
                  ? value.oneDown
                  : value.sumOne > 0
                  ? value.sumOne
                  : ""
              }
            />
            <input
              onClick={() => value.disableInput(value.sumOne, 1, "Free", "one")}
              className="col-inp"
              type="submit"
              disabled={value.disableInp1Free}
              value={
                value.disableInp1Free
                  ? value.oneFree
                  : value.sumOne > 0
                  ? value.sumOne
                  : ""
              }
            />
            <input
              onClick={() => value.disableInput(value.sumOne, 1, "Up", "one")}
              className="col-inp"
              type="submit"
              disabled={value.disableInp1Up}
              value={
                value.disableInp1Up
                  ? value.oneUp
                  : value.sumOne > 0
                  ? value.sumOne
                  : ""
              }
            />
            <input
              onClick={() => value.disableInput(value.sumOne, 1, "Hand", "one")}
              className="col-inp"
              type="submit"
              disabled={value.disableInp1Hand}
              value={
                value.disableInp1Hand
                  ? value.oneHand
                  : value.sumOne > 0
                  ? value.sumOne
                  : ""
              }
            />
            <p className="col-1"></p>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
