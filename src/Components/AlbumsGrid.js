import React, { useContext } from 'react';
import { ArtistContext } from '../Context/ArtistContext';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import SongList from './SongsList';
import Album from './Album';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 800
  },
  gridList: {
    minWidth: 680,
    maxWidth: 680,
    minHeight: 676,
    maxHeight: 676,
    margin: 'auto !important'
  }
}));

function AlbumsGrid() {


  const { artist, album } = useContext(ArtistContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {artist && !album &&
        <GridList cellHeight='auto' className={classes.gridList}>
          {artist.albums.map(album => (
            <Album 
              albumId={album.id}
              albumCover={album.images[1].url}
              albumName={album.name}
              releasedDate={album.release_date}
            />
          ))}
        </GridList>
      }
      {
        album &&
        <SongList />
      }
    </div>
  );
}

export default AlbumsGrid;