import React from "react";
import { connect } from "react-redux";
import * as Actions from "../resources/actionNames";

class StartStop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        id={this.props.idText}
        className="timer-button"
        onClick={this.props.startStopFunc}
      >
        {this.props.text}
      </button>
    );
  }
}

const mapStateToProps = state => ({
  text: state.startStopText
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  startStopFunc: () =>
    dispatch({
      type: Actions.STARTSTOP
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(StartStop);
