import {ActionTypes} from '../core/constants';

const initialState = [];

export default function trackReducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TRACK_SET:
      return setTracks(state, action);
    default: 
      return state;
  }
}

function setTracks(state, action) {
  const {tracks} = action;
  return [...state, ...tracks];
}