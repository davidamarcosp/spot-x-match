import { useState } from 'react';

export default initialVal => {

  const [song, setSong] = useState(initialVal);
  const [playing, setPlaying] = useState(false);

  const pickSong = (songUrl, songName) => {
    setSong({ songUrl: songUrl, songName: songName });
  }

  const play = () => {
    setPlaying(true);
  }

  return [song, pickSong, playing, play];

}