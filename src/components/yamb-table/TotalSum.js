import React, { Component } from "react";
import { ProductConsumer } from "./../../Context.js";

export default class TotalSum extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%", fontSize: "1.1rem" }} className="row">
            <p style={{ visibility: "hidden" }} className="col-1"></p>
            <p style={{ visibility: "hidden" }} className="col-1"></p>
            <p style={{ visibility: "hidden" }} className="col-1"></p>
            <p style={{ visibility: "hidden" }} className="col-1"></p>
            <p className="col-1">TOTAL</p>
            <p className="col-1">
              {value.sumFirstAll + value.calcSecAll + value.sumLastAll > 0
                ? value.sumFirstAll + value.calcSecAll + value.sumLastAll
                : null}
            </p>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
