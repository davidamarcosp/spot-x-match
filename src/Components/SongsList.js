import React, { useContext } from 'react';
import { ArtistContext } from '../Context/ArtistContext';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';
import Divider from '@material-ui/core/Divider';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Song from '../Components/Song';
import Lyrics from '../Components/Lyrics';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Styles/SongListStyles';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function SongList(props) {

  const { album, resetAlbum, lyrics, resetLyrics, playing } = useContext(ArtistContext);

  return (
    <div className={props.classes.root}>
      <IconButton
        className={props.classes.button}
        onClick={
          () => {
            resetAlbum();
            resetLyrics();
          }}
      >
        <ChevronLeftSharpIcon fontSize='large' />
      </IconButton>
      <List
        className={props.classes.list}
        component="nav"
        aria-label="song list"
        style={{ width: lyrics ? '330px' : '450px' }}
      >
        <Divider classes={{ root: props.classes.divider }} />
        {album.map((song, i) => {
          return <Song songName={song.name} songUrl={song.preview_url} index={i + 1} key={song.id} />
        })}
      </List>
      {
        lyrics === false &&
        <Snackbar
          open={true}
          message='NO LYRICS AVAILABLE'
          TransitionComponent={TransitionUp} 
          ContentProps={{
            classes: {
              message: props.classes.snackbarText,
              root: props.classes.snackbar
            }
          }}
        />
      }
      {
        lyrics &&
        <Lyrics songLyrics={lyrics} playing={playing} />
      }
    </div>
  );
};

export default withStyles(styles)(SongList);