import {ActionTypes} from '../core/constants';

const initialState = {
  isPlaying: false,
};

export default function playerReducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.PLAY_SONG:
      return {
        ...state,
        isPlaying: true,
      };
    case ActionTypes.PAUSE_SONG:
      return {
        ...state,
        isPlaying: false,
      };
    default: 
      return state;
  }
}

