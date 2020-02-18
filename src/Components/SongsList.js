import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';
import { ArtistContext } from '../Context/ArtistContext';
import { makeStyles } from '@material-ui/core/styles';
import Song from '../Components/Song';
import Lyrics from '../Components/Lyrics';

function SongList() {

  const { album, resetAlbum, lyrics, resetLyrics } = useContext(ArtistContext);

  const useStyles = makeStyles(theme => ({
    list: {
      width: lyrics ? '330px' : '450px',
      minWidth: 300,
      maxHeight: 676,
      overflow: 'auto',
      backgroundColor: theme.palette.background.paper,
      padding: 0
    }
  }));

  const classes = useStyles();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <IconButton
        onClick={
          () => {
            resetAlbum();
            resetLyrics()
          }}
        style={{
          height: '65px',
          width: '65px',
          alignSelf: 'center'
        }}
      >
        <ChevronLeftSharpIcon fontSize='large' />
      </IconButton>
      <List component="nav" className={classes.list} aria-label="song list">
        {album.map(song => {
          return <Song songName={song.name} songUrl={song.preview_url} />
        })}
      </List>
      {
        lyrics &&
        <Lyrics songLyrics={lyrics} />
      }
    </div>
  );
};

export default SongList;