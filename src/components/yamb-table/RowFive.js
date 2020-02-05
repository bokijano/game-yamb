import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";

export default class RowFive extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%" }} className="row">
            <p className="col-1">5</p>
            <input
              onClick={() => value.disableInput(value.sumFive, 5, "Down", "five", 6)}
              className="col-inp"
              type="submit"
              disabled={value.disableInp5Down}
              value={
                value.disableInp5Down
                  ? value.fiveDown
                  : value.sumFive > 0
                  ? value.sumFive
                  : ""
              }
            />
            <input
              onClick={() => value.disableInput(value.sumFive, 5, "Free", "five")}
              className="col-inp"
              type="submit"
              disabled={value.disableInp5Free}
              value={
                value.disableInp5Free
                  ? value.fiveFree
                  : value.sumFive > 0
                  ? value.sumFive
                  : ""
              }
            />
            <input
              onClick={() => value.disableInput(value.sumFive, 5, "Up", "five")}
              className="col-inp"
              type="submit"
              disabled={value.disableInp5Up}
              value={
                value.disableInp5Up
                  ? value.fiveUp
                  : value.sumFive > 0
                  ? value.sumFive
                  : ""
              }
            />
            <input
              onClick={() => value.disableInput(value.sumFive, 5, "Hand", "five")}
              className="col-inp"
              type="submit"
              disabled={value.disableInp5Hand}
              value={
                value.disableInp5Hand
                  ? value.fiveHand
                  : value.sumFive > 0
                  ? value.sumFive
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