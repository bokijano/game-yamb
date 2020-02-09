import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";

export default class RowMax extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%" }} className="row">
            <p className="col-1">MAX</p>

            <input
              onClick={() =>
                value.disableInput(value.maxValue, "Max", "Down", "max", "Min")
              }
              className="col-inp"
              type="submit"
              name="name"
              disabled={value.disableInpMaxDown}
              value={
                value.disableInpMaxDown
                  ? value.maxDown
                  : value.maxValue > 0
                  ? value.maxValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.maxValue, "Max", "Free", "max")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpMaxFree}
              value={
                value.disableInpMaxFree
                  ? value.maxFree
                  : value.maxValue > 0
                  ? value.maxValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.maxValue, "Max", "Up", "max")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpMaxUp}
              value={
                value.disableInpMaxUp
                  ? value.maxUp
                  : value.maxValue > 0
                  ? value.maxValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.maxValue, "Max", "Hand", "max")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpMaxHand}
              value={
                value.disableInpMaxHand
                  ? value.maxHand
                  : value.maxValue > 0
                  ? value.maxValue
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
