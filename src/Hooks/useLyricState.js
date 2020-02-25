import Musixmatch from 'musixmatch-node';
import { useState } from 'react';

export default initialVal => {

  const mxm = new Musixmatch('724f6d4a2cffed7daf345f166c4974dd');
  const [lyrics, setLyrics] = useState(initialVal);

  const pickLyrics = async (artistName, songName) => {

    mxm.getLyricsMatcher({
      q_artist: artistName.toLowerCase(),
      q_track: songName.toLowerCase(),
    })
    .then(data => {
      if(data.message.header.status_code === 404 || data.message.body.lyrics.lyrics_body === ""){
        setLyrics(false);
      } else {
      let lyrics =  data.message.body.lyrics.lyrics_body.slice(0, -69);
      setLyrics(lyrics);
      }
    })
    .catch(e => {
      console.error(e);
    });

  };

  const resetLyrics = () => {
    setLyrics();
  };
  
  return [lyrics, pickLyrics, resetLyrics];

};