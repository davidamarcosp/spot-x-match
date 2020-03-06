import React, { useContext } from 'react';
import { ArtistContext } from '../Context/ArtistContext';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { withStyles } from "@material-ui/core/styles";
import styles from '../Styles/SongStyles';

function Song(props) {

  const { artist, pickLyrics, pickSong, play } = useContext(ArtistContext);

  return (
    <div>
      <ListItem 
        className={props.classes.song}
        button
        onClick={() => {
          pickLyrics(artist.name, props.songName);
          pickSong(props.songUrl, props.songName);
          play();
        }}
        disabled={props.songUrl === null ? true : false}
      >
        <ListItemText
          secondary={props.songUrl === null ? 'No song available :(' : ''}
          secondaryTypographyProps={{
            classes: {
              root: props.classes.songSubtext
            }
          }}
        >
          <span className={props.classes.songNumber} >{props.index}</span>
          <span className={props.classes.songName} >{props.songName}</span>
        </ListItemText>
      </ListItem>
      <Divider classes={{ root: props.classes.divider }} />
    </div>
  );
}

export default withStyles(styles)(Song);