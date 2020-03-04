import React from "react";
import { connect } from "react-redux";
import Label from "./label.js";
import Display from "./display.js";
import StartStop from "./startStop.js";
import Reset from "./reset.js";
import * as Actions from "../actionNames";

export const audioId = "beep";

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.shouldBeepPlay) {
      let sound = document.getElementById(audioId);
      sound.play();
      this.props.beepHasPlayed();
    }
  }

  render() {
    return (
      <div className="timer main-block">
        <Label idText="timer-label" text={this.props.labelText} />
        <Display idText="time-left" stateValueToTrack="timeToDisplay" />
        <audio id={audioId} preload="auto" src="https://goo.gl/65cBl1">
          Your browser does not support embedded audio
        </audio>
        <StartStop idText="start_stop" />
        <Reset idText="reset" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timeLeft: state.timeToDisplay,
  shouldBeepPlay: state.shouldBeepPlay,
  labelText: state.isSessionTimerActive ? "Session" : "Break"
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  beepHasPlayed: () => dispatch({ type: Actions.BEEP })
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
