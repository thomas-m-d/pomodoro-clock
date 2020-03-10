import Store from "../store";
import accurateInterval from "accurate-interval";
import * as Actions from "./actionNames";
import * as TextResources from "./textResources";
import * as Blocks from "./blockNames";
import formatMinSec from "./formatMinSec";

export function stopIntervalTimer(state) {
  state.accurateInterval && state.accurateInterval.clear();

  let newState = {
    ...state,
    timeToDisplay: formatMinSec(state.currentTime),
    isTimerRunning: false,
    startStopText: TextResources.startButton
  };

  return newState;
}

export function setupIntervalTimer(state) {
  let interval = accurateInterval(scheduledTime => {
    Store.dispatch({
      type: Actions.DECREMENT,
      valueToDecrement: Blocks.timeLeft
    });
  }, 1000);

  let newState = {
    ...state,
    accurateInterval: interval,
    isTimerRunning: true,
    startStopText: TextResources.stopButton
  };

  return newState;
}
