import Musixmatch from 'musixmatch-node';
import { useState } from 'react';

export default initialVal => {

  const mxm = new Musixmatch('724f6d4a2cffed7daf345f166c4974dd');
  const [lyrics, setLyrics] = useState(initialVal);

  const pickLyrics = async (artist, song) => {

    mxm.getLyricsMatcher({
      q_artist: artist.name.toLowerCase(),
      q_track: song.name.toLowerCase(),
    })
    .then(data => {
      let lyrics =  data.message.body.lyrics.lyrics_body;
      setLyrics(lyrics);
    })
    .catch(e => {
      console.error(e);
    });

  };

  const resetLyrics = () => {
    setLyrics();
  };

  return [lyrics, pickLyrics, resetLyrics];
}