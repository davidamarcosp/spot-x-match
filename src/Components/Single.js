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

  return (
    <div>
      <ListItem
        className={props.classes.single}
        button
        onClick={async () => {
          pickLyrics(artist.name, props.singleName);
          pickSong(props.singleUrl, props.singleName);
          play();
        }}
        disabled={props.singleUrl === null ? true : false}
      >
        <ListItemAvatar>
          <Avatar
            className={props.classes.singleImage}
            src={props.singleImage}
            variant='rounded'
          />
        </ListItemAvatar>
        <ListItemText
          secondary={props.singleUrl === null ? 'No song available' : ''}
          secondaryTypographyProps={{
            classes: {
              root: props.classes.singleSubtext
            }
          }}
          primaryTypographyProps={{
            noWrap: true
          }}
        >
          <div className={props.classes.singleNameWrapper} >
            <span className={props.classes.singleName} >{props.singleName}</span>
          </div>
          <p className={props.classes.releasedDate} >{`Released: ${props.releasedDate}`}</p>
        </ListItemText>
      </ListItem>
      <Divider />
    </div>
  );
}

export default withStyles(styles)(Single);