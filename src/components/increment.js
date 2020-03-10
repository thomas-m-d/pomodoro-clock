import React from "react";
import { connect } from "react-redux";
import * as Actions from "../resources/actionNames";

class Increment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        id={this.props.idText}
        className="increment-button inc-dec-button"
        onClick={this.props.increment}
      >
        +
      </button>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () =>
    dispatch({
      type: Actions.INCREMENT,
      valueToIncrement: ownProps.valueToIncrement
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Increment);
