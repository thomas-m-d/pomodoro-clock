import React from "react";
import { connect } from "react-redux";
import Label from "./label.js";
import Display from "./display.js";
import Increment from "./increment.js";
import Decrement from "./decrement.js";
import * as Blocks from "../resources/blockNames";

class Session extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="session main-block">
        <div className="session-horizontal-div">
          <Decrement
            idText="session-decrement"
            valueToDecrement={Blocks.sessionBlock}
          />
          <div className="session-vertical-div">
            <Label idText="session-label" text="Session Length" />
            <Display
              idText="session-length"
              stateValueToTrack="sessionLength"
            />
          </div>
          <Increment
            idText="session-increment"
            valueToIncrement={Blocks.sessionBlock}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Session);
