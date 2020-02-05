import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";

export default class RowThree extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%" }} className="row">
            <p className="col-1">6</p>
            <input
              onClick={() => value.disableInput(value.sumSix, 6, "Down", "six", "Max")}
              className="col-inp"
              type="submit"
              disabled={value.disableInp6Down}
              value={
                value.disableInp6Down
                  ? value.sixDown
                  : value.sumSix > 0
                  ? value.sumSix
                  : ""
              }
            />
            <input
              onClick={() => value.disableInput(value.sumSix, 6, "Free", "six")}
              className="col-inp"
              type="submit"
              disabled={value.disableInp6Free}
              value={
                value.disableInp6Free
                  ? value.sixFree
                  : value.sumSix > 0
                  ? value.sumSix
                  : ""
              }
            />
            <input
              onClick={() => value.disableInput(value.sumSix, 6, "Up", "six")}
              className="col-inp"
              type="submit"
              disabled={value.disableInp6Up}
              value={
                value.disableInp6Up
                  ? value.sixUp
                  : value.sumSix > 0
                  ? value.sumSix
                  : ""
              }
            />
            <input
              onClick={() => value.disableInput(value.suSix, 6, "Hand", "six")}
              className="col-inp"
              type="submit"
              disabled={value.disableInp6Hand}
              value={
                value.disableInp6Hand
                  ? value.sixHand
                  : value.suSix > 0
                  ? value.suSix
                  : ""
              }
            />
            <p className="col-1"></p>
          </div>
        )}
      </ProductConsumer>
  );
}; 
};   