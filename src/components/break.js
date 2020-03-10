import React from "react";
import { connect } from "react-redux";
import Label from "./label.js";
import Display from "./display.js";
import Increment from "./increment.js";
import Decrement from "./decrement.js";
import * as Blocks from "../resources/blockNames";

class Break extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="break main-block">
        <div className="break-horizontal-div">
          <Decrement
            idText="break-decrement"
            valueToDecrement={Blocks.breakBlock}
          />
          <div className="break-vertical-div">
            <Label idText="break-label" text="Break Length" />
            <Display idText="break-length" stateValueToTrack="breakLength" />
          </div>
          <Increment
            idText="break-increment"
            valueToIncrement={Blocks.breakBlock}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Break);
