import { initialState } from "./store.js";
import * as Actions from "./resources/actionNames";
import * as DecrementFunctions from "./resources/decrementFunctions.js";
import * as IncrementFunctions from "./resources/incrementFunctions";
import * as ResetFunctions from "./resources/resetFunctions";
import * as StartStopFunctions from "./resources/startStopFunctions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.DECREMENT:
      if (DecrementFunctions.isBreakAndGreaterThanOne(state, action))
        return DecrementFunctions.decrementBreakLength(state);
      else if (DecrementFunctions.isSessionAndGreaterThanOne(state, action))
        return DecrementFunctions.decrementSessionLength(state);
      else if (DecrementFunctions.isTimeLeftAndGreaterThanZero(state, action))
        return DecrementFunctions.decrementTimeLeft(state);
      else if (DecrementFunctions.isTimeLeftAndEqualToZero(state, action))
        return DecrementFunctions.switchBetweenSessionAndBreakTimer(state);
      else return state;

    case Actions.INCREMENT:
      if (IncrementFunctions.isBreakAndLessThanSixty(state, action))
        return IncrementFunctions.incrementBreakLength(state);
      else if (IncrementFunctions.isSessionandLessThanSixty(state, action))
        return IncrementFunctions.incrementSessionLength(state);
      else return state;

    case Actions.BEEP:
      return { ...state, shouldBeepPlay: false };

    case Actions.RESET:
      if (state.isTimerRunning) ResetFunctions.clearIntervalTimer(state);
      ResetFunctions.resetAudioElement();
      return initialState;

    case Actions.STARTSTOP:
      if (state.isTimerRunning) {
        return StartStopFunctions.stopIntervalTimer(state);
      } else {
        return StartStopFunctions.setupIntervalTimer(state);
      }

    default:
      return state;
  }
};

export default reducer;
