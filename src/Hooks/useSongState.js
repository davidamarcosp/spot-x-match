import { useState } from 'react';

export default initialVal => {

  const [song, setSong] = useState(initialVal);
  const [playing, setPlaying] = useState(false);

  const pickSong = (songUrl) => {
    setSong(songUrl);
  }

  const play = () => {
    setPlaying(true);
  }

  return [song, pickSong, playing, play];

}