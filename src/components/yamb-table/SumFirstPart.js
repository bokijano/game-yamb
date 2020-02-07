import React, { Component } from "react";
import { ProductConsumer } from "./../../Context.js";

export default class SumFirstPart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%", fontSize: "1.2rem" }} className="row">
            <p className="col-1">SUM</p>
            <p className="col-1">
              {value.sumFirstDown > 0 ? value.sumFirstDown : null}
            </p>
            <p className="col-1">
              {value.sumFirstFree > 0 ? value.sumFirstFree : null}
            </p>
            <p className="col-1">
              {value.sumFirstUp > 0 ? value.sumFirstUp : null}
            </p>
            <p className="col-1">
              {value.sumFirstHand > 0 ? value.sumFirstHand : null}
            </p>
            <p className="col-1">
              {value.sumFirstAll > 0 ? value.sumFirstAll : null}
            </p>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
