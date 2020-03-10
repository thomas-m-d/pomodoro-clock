import * as Blocks from "./blockNames";
import formatMinSec from "./formatMinSec";

export function isBreakAndGreaterThanOne(state, action) {
  return action.valueToDecrement == Blocks.breakBlock && state.breakLength > 1;
}

export function isSessionAndGreaterThanOne(state, action) {
  return (
    action.valueToDecrement == Blocks.sessionBlock && state.sessionLength > 1
  );
}

export function isTimeLeftAndGreaterThanZero(state, action) {
  return action.valueToDecrement == Blocks.timeLeft && state.currentTime > 0;
}

export function isTimeLeftAndEqualToZero(state, action) {
  return action.valueToDecrement == Blocks.timeLeft && state.currentTime == 0;
}

export function decrementBreakLength(state) {
  let newState = {
    ...state,
    breakLength: state.breakLength - 1,
    currentTime: state.isSessionTimerActive
      ? state.currentTime
      : state.currentTime - 60,
    timeToDisplay: state.isSessionTimerActive
      ? formatMinSec(state.currentTime)
      : formatMinSec(state.currentTime - 60)
  };
  return newState;
}

export function decrementSessionLength(state) {
  let newState = {
    ...state,
    sessionLength: state.sessionLength - 1,
    currentTime: state.isSessionTimerActive
      ? state.currentTime - 60
      : state.currentTime,
    timeToDisplay: state.isSessionTimerActive
      ? formatMinSec(state.currentTime - 60)
      : formatMinSec(state.currentTime)
  };
  return newState;
}

export function decrementTimeLeft(state) {
  let newState = {
    ...state,
    currentTime: state.currentTime - 1,
    timeToDisplay: formatMinSec(state.currentTime - 1)
  };
  return newState;
}

export function switchBetweenSessionAndBreakTimer(state) {
  let newState = {
    ...state,
    isSessionTimerActive: !state.isSessionTimerActive,
    shouldBeepPlay: true,
    currentTime: state.isSessionTimerActive
      ? state.breakLength * 60
      : state.sessionLength * 60,
    timeToDisplay: formatMinSec(
      state.isSessionTimerActive
        ? state.breakLength * 60
        : state.sessionLength * 60
    )
  };
  return newState;
}
