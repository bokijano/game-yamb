import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";

export default class RowPoker extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%" }} className="row">
            <p className="col-1">POKER</p>

            <input
              onClick={() =>
                value.disableInput(
                  value.pokerValue,
                  "Poker",
                  "Down",
                  "poker",
                  "Yamb"
                )
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpPokerDown}
              value={
                value.disableInpPokerDown
                  ? value.pokerDown
                  : value.pokerValue > 0
                  ? value.pokerValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.pokerValue, "Poker", "Free", "poker")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpPokerFree}
              value={
                value.disableInpPokerFree
                  ? value.pokerFree
                  : value.pokerValue > 0
                  ? value.pokerValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(
                  value.pokerValue,
                  "Poker",
                  "Up",
                  "poker",
                  "Ful"
                )
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpPokerUp}
              value={
                value.disableInpPokerUp
                  ? value.pokerUp
                  : value.pokerValue > 0
                  ? value.pokerValue
                  : ""
              }
            />
            <input
              onClick={() =>
                value.disableInput(value.pokerValue, "Poker", "Hand", "poker")
              }
              className="col-inp"
              type="submit"
              disabled={value.disableInpPokerHand || value.disableHandColumn}
              value={
                value.disableInpPokerHand
                  ? value.pokerHand
                  : value.pokerValue > 0 && value.disableHandColumn == false
                  ? value.pokerValue
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
