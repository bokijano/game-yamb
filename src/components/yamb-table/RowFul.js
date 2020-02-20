import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";

export default class RowFul extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%" }} className="row">
            <p className="col-1">FULL</p>

            <input
              onClick={() =>
                value.disableInput(
                  value.fulValue,
                  "Ful",
                  "Down",
                  "ful",
                  "Poker"
                )
              }
              className="col-inp"
              type="submit"
              name="name"
              disabled={value.disableInpFulDown}
              value={
                value.disableInpFulDown
                  ? value.fulDown
                  : value.fulValue > 0
                  ? value.fulValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.fulValue, "Ful", "Free", "ful")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpFulFree}
              value={
                value.disableInpFulFree
                  ? value.fulFree
                  : value.fulValue > 0
                  ? value.fulValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(
                  value.fulValue,
                  "Ful",
                  "Up",
                  "ful",
                  "Triling"
                )
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpFulUp}
              value={
                value.disableInpFulUp
                  ? value.fulUp
                  : value.fulValue > 0
                  ? value.fulValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.fulValue, "Ful", "Hand", "ful")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpFulHand}
              value={
                value.disableInpFulHand
                  ? value.fulHand
                  : value.fulValue > 0
                  ? value.fulValue
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
