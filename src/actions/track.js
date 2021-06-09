import {ActionTypes} from '../core/constants';

export const setTracks = (tracks) => {
  return {
    type: ActionTypes.TRACK_SET,
    tracks
  };
};