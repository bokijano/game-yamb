import React, { Component } from "react";
import { ProductConsumer } from "./../../Context.js";

export default class TotalSum extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div style={{ marginTop: "-7%", fontSize: "1.1rem" }} className="row">
            <p className="col-1">TOTAL</p>
            <p className="col-1"></p>
            <p className="col-1"></p>
            <p className="col-1"></p>
            <p className="col-1"></p>
            <p className="col-1">
              {value.sumFirstAll > 0 ? value.sumFirstAll : null}
            </p>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
