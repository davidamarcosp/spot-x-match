import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import { ArtistContext } from '../Context/ArtistContext';
import { makeStyles } from '@material-ui/core/styles';
import Song from '../Components/Song';

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  }
}));

function SongList() {

  const { album, resetAlbum, resetLyrics } = useContext(ArtistContext);
  const classes = useStyles();

  return (
    <div>
      <button 
        onClick={
          () => { 
            resetAlbum(); 
            resetLyrics() 
          }}
      >
        BACK
      </button>
      <List component="nav" className={classes.list} aria-label="mailbox folders" style={{ marginRight: 'auto ' }}>
        {album.map(song => {
          return <Song songName={song.name} />
        })}
      </List>
      {/* <p>{lyrics}</p> */}
    </div>
  );
};

export default SongList;