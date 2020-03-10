import React from "react";
import { connect } from "react-redux";
import * as Actions from "../resources/actionNames.js";

class Decrement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        id={this.props.idText}
        className="decrement-button inc-dec-button"
        onClick={this.props.decrement}
      >
        -
      </button>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({
  decrement: () =>
    dispatch({
      type: Actions.DECREMENT,
      valueToDecrement: ownProps.valueToDecrement
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Decrement);
