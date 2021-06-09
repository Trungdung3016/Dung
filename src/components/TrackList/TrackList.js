import React from 'react';
import {connect} from 'react-redux';
import PlaySong from '../PlaySong/PlaySong';

const TrackList = (props) => {
  
  const playTrack = (track) => {
    props.playTrack(track);
  }
  const pauseTrack = (track) => {
    props.pauseTrack(track);
    
  }
  return (
    <div>
    {
      props.tracks.map((track, key) => {
        return <div key={key}> 
        {track.title} 
        <button onClick={() => playTrack(track)}>Play</button>
        <button onClick={() => pauseTrack(track)}>Pause</button>
        </div>;
      })
    }
    <PlaySong />
    </div>
  )
}

const mapStateToProps = (state) => {
  const tracks = state.tracks;
  return {tracks}
}
const mapDispatchToProps = (dispatch) => {
  return {
    playTrack: () => dispatch({type: 'PLAY_SONG'}),
    pauseTrack: () => dispatch({type: 'PAUSE_SONG'})
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(TrackList)