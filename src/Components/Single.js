import React, { useContext } from 'react';
import { ArtistContext } from '../Context/ArtistContext';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { withStyles } from "@material-ui/core/styles";
import styles from '../Styles/SingleStyles';

function Single(props) {

  const { artist, pickLyrics, play, pickSong } = useContext(ArtistContext);

  console.log('RENDER');

  return (
    <div>
      <ListItem
        className={props.classes.song}
        button
        onClick={async () => {
          pickLyrics(artist.name, props.songName);
          pickSong(props.songUrl, props.songName);
          play();
        }}
        disabled={props.songUrl === null ? true : false}
      >
        <ListItemAvatar>
          <Avatar
            src={props.songImage}
            variant='rounded'
            style={{ height: '70px', width: '70px' }}
          />
        </ListItemAvatar>
        <ListItemText
          secondary={props.songUrl === null ? 'No song available :(' : ''}
          secondaryTypographyProps={{
            classes: {
              root: props.classes.songSubtext
            }
          }}
          primaryTypographyProps={{
            noWrap: true
          }}
        >
          <div style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
            <span className={props.classes.songName} >{props.songName}</span>
          </div>
          <p className={props.classes.songNumber} >{`Released: ${props.releasedDate}`}</p>
        </ListItemText>
      </ListItem>
      <Divider />
    </div>
  );
}

export default withStyles(styles)(Single);