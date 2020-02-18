import React, { useContext } from 'react';
import { ArtistContext } from '../Context/ArtistContext';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


function Song(props) {

  const { artist, pickLyrics, pickSong, play } = useContext(ArtistContext);
  console.log('render');

  return (
    <div>
      <ListItem button
        onClick={() => {
          pickLyrics(artist.name, props.songName);
          pickSong(props.songUrl);
          play();
        }}
      >
        <ListItemText
          primary={props.songName}
        />
      </ListItem>
      <Divider />
    </div>
  );
}

export default Song;