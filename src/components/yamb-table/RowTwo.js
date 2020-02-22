import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";

export default class RowTwo extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%" }} className="row">
            <p className="col-1">2</p>
            <input
              onClick={() =>
                value.disableInput(value.sumTwo, 2, "Down", "two", 3)
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInp2Down}
              value={
                value.disableInp2Down
                  ? value.twoDown
                  : value.sumTwo > 0
                  ? value.sumTwo
                  : ""
              }
            />
            <input
              onClick={() => value.disableInput(value.sumTwo, 2, "Free", "two")}
              className="col-inp"
              type="submit"
              disabled={value.disableInp2Free}
              value={
                value.disableInp2Free
                  ? value.twoFree
                  : value.sumTwo > 0
                  ? value.sumTwo
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.sumTwo, 2, "Up", "two", 1)
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInp2Up}
              value={
                value.disableInp2Up
                  ? value.twoUp
                  : value.sumTwo > 0
                  ? value.sumTwo
                  : ""
              }
            />
            <input
              onClick={() => value.disableInput(value.sumTwo, 2, "Hand", "two")}
              className="col-inp"
              type="submit"
              disabled={value.disableInp2Hand || value.disableHandColumn}
              value={
                value.disableInp2Hand
                  ? value.twoHand
                  : value.sumTwo > 0 && value.disableHandColumn == false
                  ? value.sumTwo
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
