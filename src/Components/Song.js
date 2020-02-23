import React, { useContext } from 'react';
import { ArtistContext } from '../Context/ArtistContext';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function Song(props) {

  const { artist, pickLyrics, pickSong, play } = useContext(ArtistContext);

  return (
    <div>
      <ListItem button
        onClick={() => {
          pickLyrics(artist.name, props.songName);
          pickSong(props.songUrl, props.songName);
          play();
        }}
        style={{ height: '66px' }}
        disabled={props.songUrl === null ? true : false}
      >
        <ListItemText
          secondary={props.songUrl === null ? 'No song available :(' : ''}
          secondaryTypographyProps={{
            style: {
              marginLeft: '23px'
            }
          }}
        >
          <span style={{ fontWeight: '600', fontSize: '14px' }}>{props.index}</span>
          <span style={{ marginLeft: '15px' }}>{props.songName}</span>
        </ListItemText>
      </ListItem>
      <Divider />
    </div>
  );
}

export default Song;