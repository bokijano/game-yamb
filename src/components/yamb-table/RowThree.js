import React, { Component } from "react";
import { ProductConsumer } from "./../../Context";

export default class RowThree extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%" }} className="row">
            <p className="col-1">3</p>
            <input
              onClick={() => value.disableInput(value.sumThree, 3, "Down", "three", 4)}
              className="col-inp"
              type="submit"
              disabled={value.disableInp3Down}
              value={
                value.disableInp3Down
                  ? value.threeDown
                  : value.sumThree > 0
                  ? value.sumThree
                  : ""
              }
            />
            <input
              onClick={() => value.disableInput(value.sumThree, 3, "Free", "three")}
              className="col-inp"
              type="submit"
              disabled={value.disableInp3Free}
              value={
                value.disableInp3Free
                  ? value.threeFree
                  : value.sumThree > 0
                  ? value.sumThree
                  : ""
              }
            />
            <input
              onClick={() => value.disableInput(value.sumThree, 3, "Up", "three")}
              className="col-inp"
              type="submit"
              disabled={value.disableInp3Up}
              value={
                value.disableInp3Up
                  ? value.threeUp
                  : value.sumThree > 0
                  ? value.sumThree
                  : ""
              }
            />
            <input
              onClick={() => value.disableInput(value.sumThree, 3, "Hand", "three")}
              className="col-inp"
              type="submit"
              disabled={value.disableInp3Hand}
              value={
                value.disableInp3Hand
                  ? value.threeHand
                  : value.sumThree > 0
                  ? value.sumThree
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