import React from "react";
import { connect } from "react-redux";
import * as Actions from "../resources/actionNames";

class Reset extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        id={this.props.idText}
        className="timer-button"
        onClick={this.props.reset}
      >
        Reset
      </button>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({
  reset: () =>
    dispatch({
      type: Actions.RESET
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
