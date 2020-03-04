import Store from "../store";
import accurateInterval from "accurate-interval";
import * as Actions from "../actionNames";
import formatMinSec from "./formatMinSec";

export function stopIntervalTimer(state) {
  state.accurateInterval && state.accurateInterval.clear();

  let newState = {
    ...state,
    timeToDisplay: formatMinSec(state.currentTime),
    isTimerRunning: false
  };

  return newState;
}

export function setupIntervalTimer(state) {
  let interval = accurateInterval(scheduledTime => {
    Store.dispatch({
      type: Actions.DECREMENT,
      valueToDecrement: Actions.timeLeft
    });
  }, 1000);

  let newState = {
    ...state,
    accurateInterval: interval,
    isTimerRunning: true
  };

  return newState;
}
