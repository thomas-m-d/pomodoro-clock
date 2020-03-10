import React from "react";
import { connect } from "react-redux";
import Label from "./label.js";
import Display from "./display.js";
import StartStop from "./startStop.js";
import Reset from "./reset.js";
import * as Actions from "../resources/actionNames";
import * as TextResources from "../resources/textResources";

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
        <Display idText="time-left" stateValueToTrack="timeToDisplay" />
        <Label
          idText="timer-label"
          text={"Until End of " + this.props.labelText}
        />
        <audio id={audioId} preload="auto" src="https://goo.gl/65cBl1">
          Your browser does not support embedded audio
        </audio>
        <div className="timer-button-div">
          <StartStop idText="start_stop" />
          <Reset idText="reset" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timeLeft: state.timeToDisplay,
  shouldBeepPlay: state.shouldBeepPlay,
  labelText: state.isSessionTimerActive
    ? TextResources.timerLabelSession
    : TextResources.timerLabelBreak
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  beepHasPlayed: () => dispatch({ type: Actions.BEEP })
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
