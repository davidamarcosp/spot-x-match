import React, { useContext } from 'react';
import { ArtistContext } from '../Context/ArtistContext';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function Song(props) {

  const { artist, pickLyrics } = useContext(ArtistContext);

  return (
    <div>
      <ListItem button>
        <ListItemText
          primary={props.songName}
          onClick={() => {
            pickLyrics(artist, props.songName);
          }}
        />
      </ListItem>
      <Divider />
    </div>
  );
}

export default Song;