import React from 'react';

const PlaySong = () => {
  const url = "https://firebasestorage.googleapis.com/v0/b/spotiphake.appspot.com/o/blinding-light.mp3?alt=media&token=773e4cb1-9101-449b-80fc-966f1bc72166";
  const audio = new Audio(url);
  const play = () => {
    audio.play();
  }
  const pause = () => {
    audio.pause();
  }
  return (
    <div>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  )
}

export default PlaySong