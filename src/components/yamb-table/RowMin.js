import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";

export default class RowMin extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%" }} className="row">
            <p className="col-1">MIN</p>

            <input
              onClick={() =>
                value.disableInput(
                  value.minValue,
                  "Min",
                  "Down",
                  "min",
                  "Kenta"
                )
              }
              className="col-inp"
              type="submit"
              name="name"
              disabled={value.disableInpMinDown}
              value={
                value.disableInpMinDown
                  ? value.minDown
                  : value.minValue > 0
                  ? value.minValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.minValue, "Min", "Free", "min")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpMinFree}
              value={
                value.disableInpMinFree
                  ? value.minFree
                  : value.minValue > 0
                  ? value.minValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.minValue, "Min", "Up", "min", "Max")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpMinUp}
              value={
                value.disableInpMinUp
                  ? value.minUp
                  : value.minValue > 0
                  ? value.minValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.minValue, "Min", "Hand", "min")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpMinHand || value.disableHandColumn}
              value={
                value.disableInpMinHand
                  ? value.minHand
                  : value.minValue > 0 && value.disableHandColumn == false
                  ? value.minValue
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
