import React, { Component } from "react";
import { ProductConsumer } from "./../../Context.js";

export default class CalcSecondPart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%", fontSize: "1.2rem" }} className="row">
            <p className="col-1">SUM</p>
            <p className="col-1">
              {value.oneDown > 0 &&
              value.maxDown > 0 &&
              value.minDown > 0 &&
              value.calcSecDown > 0 &&
              value.calcSecDown != value.oneDown * value.maxDown
                ? value.calcSecDown
                : null}
            </p>
            <p className="col-1">
              {value.oneFree > 0 &&
              value.maxFree > 0 &&
              value.minFree > 0 &&
              value.calcSecFree > 0 &&
              value.calcSecFree != value.oneFree * value.maxFree
                ? value.calcSecFree
                : null}
            </p>
            <p className="col-1">
              {value.oneUp > 0 &&
              value.maxUp > 0 &&
              value.minUp > 0 &&
              value.calcSecUp > 0 &&
              value.calcSecUp != value.oneUp * value.maxUp
                ? value.calcSecUp
                : null}
            </p>
            <p className="col-1">
              {value.oneHand > 0 &&
              value.maxHand > 0 &&
              value.minHand > 0 &&
              value.calcSecHand > 0 &&
              value.calcSecHand != value.oneHand * value.maxHand
                ? value.calcSecHand
                : null}
            </p>
            <p className="col-1">
              {value.calcSecAll > 0 ? value.calcSecAll : null}
            </p>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
