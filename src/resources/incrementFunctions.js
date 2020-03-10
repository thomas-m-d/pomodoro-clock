import * as Blocks from "./blockNames";
import formatMinSec from "./formatMinSec";

export function isBreakAndLessThanSixty(state, action) {
  return action.valueToIncrement == Blocks.breakBlock && state.breakLength < 60;
}

export function isSessionandLessThanSixty(state, action) {
  return (
    action.valueToIncrement == Blocks.sessionBlock && state.sessionLength < 60
  );
}

export function incrementBreakLength(state) {
  let newState = {
    ...state,
    breakLength: state.breakLength + 1,
    currentTime: state.isSessionTimerActive
      ? state.currentTime
      : state.currentTime + 60,
    timeToDisplay: state.isSessionTimerActive
      ? formatMinSec(state.currentTime)
      : formatMinSec(state.currentTime + 60)
  };
  return newState;
}

export function incrementSessionLength(state) {
  let newState = {
    ...state,
    sessionLength: state.sessionLength + 1,
    currentTime: state.isSessionTimerActive
      ? state.currentTime + 60
      : state.currentTime,
    timeToDisplay: state.isSessionTimerActive
      ? formatMinSec(state.currentTime + 60)
      : formatMinSec(state.currentTime)
  };
  return newState;
}
