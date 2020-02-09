import React, { Component } from "react";
import RowNames from "./../yamb-table/RowNames.js";
import RowOne from "./../yamb-table/RowOne";
import RowTwo from "./../yamb-table/RowTwo";
import RowThree from "./../yamb-table/RowThree";
import RowFour from "./../yamb-table/RowFour";
import RowFive from "./../yamb-table/RowFive";
import RowSix from "./../yamb-table/RowSix";
import SumFirstPart from "./../yamb-table/SumFirstPart";
import RowMax from "./../yamb-table/RowMax";
import RowMin from "./../yamb-table/RowMin";
import CalcSecondPart from "./../yamb-table/CalcSecondPart";
import RowKenta from "./../yamb-table/RowKenta";
import RowTriling from "./../yamb-table/RowTriling";
import RowFul from "./../yamb-table/RowFul";
import RowPoker from "./../yamb-table/RowPoker";
import RowYamb from "./../yamb-table/RowYamb";

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
        <RowMax />
        <RowMin />
        <CalcSecondPart />
        <RowKenta />
        <RowTriling />
        <RowFul />
        <RowPoker />
        <RowYamb /> 
      </div>
    );
  }
}
