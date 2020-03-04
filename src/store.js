import { createStore } from "redux";
import reducer from "./reducer";

export const initialState = {
  sessionLength: 25,
  breakLength: 5,
  currentTime: 1500,
  timeToDisplay: "25:00",
  accurateInterval: "",
  isTimerRunning: false,
  shouldBeepPlay: false,
  isSessionTimerActive: true
};

const Store = createStore(reducer);
export default Store;
