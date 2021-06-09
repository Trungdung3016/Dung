import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store'
import TrackList from './components/TrackList/TrackList';
import * as actions from './actions';
import { Provider } from 'react-redux';

const tracks = [
  {
    id: 1,
    title: 'hello world',
    url: 'https://firebasestorage.googleapis.com/v0/b/spotiphake.appspot.com/o/save-your-tears.mp3?alt=media&token=4dbb624f-a4ea-4cb4-875d-6635fdebe900',
  },
  {
    id: 2,
    title: 'goodbye world',
    url: 'https://firebasestorage.googleapis.com/v0/b/spotiphake.appspot.com/o/blinding-light.mp3?alt=media&token=773e4cb1-9101-449b-80fc-966f1bc72166',
  },
  {
    id: 3,
    title: 'hello there',
    url: 'https://firebasestorage.googleapis.com/v0/b/spotiphake.appspot.com/o/blinding-light.mp3?alt=media&token=773e4cb1-9101-449b-80fc-966f1bc72166',
  },
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));


ReactDOM.render(
  <Provider store={store}>
  <TrackList />
  </Provider>,
  document.getElementById('root')
);