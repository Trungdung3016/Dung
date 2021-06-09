import {ActionTypes} from '../core/constants';

export const playTrack = (track) => {
  return {
    type: ActionTypes.PLAY_SONG,
    payload: {
      isPlaying: true,
      track
    }
  };
}

export const pauseTrack = () => {
  return {
    type: ActionTypes.PLAY_SONG,
    payload: false
  };
}
