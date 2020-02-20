import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";

export default class RowYamb extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%" }} className="row">
            <p className="col-1">YAMB</p>

            <input
              onClick={() =>
                value.disableInput(value.yambValue, "Yamb", "Down", "yamb")
              }
              className="col-inp"
              type="submit"
              name="name"
              disabled={value.disableInpYambDown}
              value={
                value.disableInpYambDown
                  ? value.yambDown
                  : value.yambValue > 0
                  ? value.yambValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.yambValue, "Yamb", "Free", "yamb")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpYambFree}
              value={
                value.disableInpYambFree
                  ? value.yambFree
                  : value.yambValue > 0
                  ? value.yambValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(
                  value.yambValue,
                  "Yamb",
                  "Up",
                  "yamb",
                  "Poker"
                )
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpYambUp}
              value={
                value.disableInpYambUp
                  ? value.yambUp
                  : value.yambValue > 0
                  ? value.yambValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.yambValue, "Yamb", "Hand", "yamb")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpYambHand}
              value={
                value.disableInpYambHand
                  ? value.yambHand
                  : value.yambValue > 0
                  ? value.yambValue
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
