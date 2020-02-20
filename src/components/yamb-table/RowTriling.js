import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";

export default class RowTriling extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%" }} className="row">
            <p className="col-1">TRILL</p>

            <input
              onClick={() =>
                value.disableInput(
                  value.trilingValue,
                  "Triling",
                  "Down",
                  "triling",
                  "Ful"
                )
              }
              className="col-inp"
              type="submit"
              name="name"
              disabled={value.disableInpTrilingDown}
              value={
                value.disableInpTrilingDown
                  ? value.trilingDown
                  : value.trilingValue > 0
                  ? value.trilingValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(
                  value.trilingValue,
                  "Triling",
                  "Free",
                  "triling"
                )
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpTrilingFree}
              value={
                value.disableInpTrilingFree
                  ? value.trilingFree
                  : value.trilingValue > 0
                  ? value.trilingValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(
                  value.trilingValue,
                  "Triling",
                  "Up",
                  "triling"
                )
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpTrilingUp}
              value={
                value.disableInpTrilingUp
                  ? value.trilingUp
                  : value.trilingValue > 0
                  ? value.trilingValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(
                  value.trilingValue,
                  "Triling",
                  "Hand",
                  "triling"
                )
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpTrilingHand}
              value={
                value.disableInpTrilingHand
                  ? value.trilingHand
                  : value.trilingValue > 0
                  ? value.trilingValue
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
