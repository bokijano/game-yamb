import React, { Component } from "react";
import { ProductConsumer } from "./../../Context.js";

export default class SumLastPart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%", fontSize: "1.2rem" }} className="row">
            <p className="col-1">SUM</p>
            <p className="col-1">
              {value.sumLastDown > 0 ? value.sumLastDown : null}
            </p>
            <p className="col-1">
              {value.sumLastFree > 0 ? value.sumLastFree : null}
            </p>
            <p className="col-1">
              {value.sumLastUp > 0 ? value.sumLastUp : null}
            </p>
            <p className="col-1">
              {value.sumLastHand > 0 ? value.sumLastHand : null}
            </p>
            <p className="col-1">
              {value.sumLastAll > 0 ? value.sumLastAll : null}
            </p>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
