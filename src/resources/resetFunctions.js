import { audioId } from "../components/timer";

export function clearIntervalTimer(state) {
  state.accurateInterval && state.accurateInterval.clear();
}

export function resetAudioElement() {
  document.getElementById(audioId).pause();
  document.getElementById(audioId).currentTime = 0;
}
