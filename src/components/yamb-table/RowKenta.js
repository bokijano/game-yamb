import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";

export default class RowMin extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-6%" }} className="row">
            <p className="col-1">KENTA</p>

            <input
              onClick={() =>
                value.disableInput(
                  value.kentaValue,
                  "Kenta",
                  "Down",
                  "kenta",
                  "Triling"
                )
              }
              className="col-inp"
              type="submit"
              name="name"
              disabled={value.disableInpKentaDown}
              value={
                value.disableInpKentaDown
                  ? value.kentaDown
                  : value.kentaValue > 0
                  ? value.kentaValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.kentaValue, "Kenta", "Free", "kenta")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpKentaFree}
              value={
                value.disableInpKentaFree
                  ? value.kentaFree
                  : value.kentaValue > 0
                  ? value.kentaValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(
                  value.kentaValue,
                  "Kenta",
                  "Up",
                  "kenta",
                  "Min"
                )
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpKentaUp}
              value={
                value.disableInpKentaUp
                  ? value.kentaUp
                  : value.kentaValue > 0
                  ? value.kentaValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.kentaValue, "Kenta", "Hand", "kenta")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpKentaHand || value.disableHandColumn}
              value={
                value.disableInpKentaHand
                  ? value.kentaHand
                  : value.kentaValue > 0 && value.disableHandColumn == false
                  ? value.kentaValue
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
