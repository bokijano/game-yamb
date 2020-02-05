import React, { Component } from "react";
import RowNames from "./../yamb-table/RowNames.js";
import RowOne from "./../yamb-table/RowOne";
import RowTwo from "./../yamb-table/RowTwo";
import RowThree from "./../yamb-table/RowThree";
import RowFour from "./../yamb-table/RowFour";
import RowFive from "./../yamb-table/RowFive";
import RowSix from "./../yamb-table/RowSix";
import SumFirstPart from "./../yamb-table/SumFirstPart";

export default class PlayerTwo extends Component {
  render() {
    return (
      <div>
        <RowNames />
        <RowOne />
        <RowTwo />
        <RowThree />
        <RowFour />
        <RowFive />
        <RowSix />
        <SumFirstPart />
      </div>
    );
  }
}
