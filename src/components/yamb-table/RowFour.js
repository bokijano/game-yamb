import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";

export default class RowOne extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%" }} className="row">
            <p className="col-1">4</p>
            <input
              onClick={() =>
                value.disableInput(value.sumFour, 4, "Down", "four", 5)
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInp4Down}
              value={
                value.disableInp4Down
                  ? value.fourDown
                  : value.sumFour > 0
                  ? value.sumFour
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.sumFour, 4, "Free", "four")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInp4Free}
              value={
                value.disableInp4Free
                  ? value.fourFree
                  : value.sumFour > 0
                  ? value.sumFour
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.sumFour, 4, "Up", "four", 3)
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInp4Up}
              value={
                value.disableInp4Up
                  ? value.fourUp
                  : value.sumFour > 0
                  ? value.sumFour
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.sumFour, 4, "Hand", "four")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInp4Hand || value.disableHandColumn}
              value={
                value.disableInp4Hand
                  ? value.fourHand
                  : value.sumFour > 0 && value.disableHandColumn == false
                  ? value.sumFour
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
