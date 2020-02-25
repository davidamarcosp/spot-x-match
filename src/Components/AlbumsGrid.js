import React, { useContext } from 'react';
import { ArtistContext } from '../Context/ArtistContext';
import GridList from '@material-ui/core/GridList';
import SongList from './SongsList';
import SinglesList from './SinglesList';
import Album from './Album';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Styles/AlbumGridStyles';

function AlbumsGrid(props) {

  const { artist, album, singles } = useContext(ArtistContext);

  return (
    <div className={props.classes.root}>
      {artist && !album && !singles &&
        <GridList cellHeight='auto' className={props.classes.gridList}>
          {artist.albums.map(album => (
            <Album 
              albumId={album.id}
              albumCover={album.images[1].url}
              albumName={album.name}
              releasedDate={album.release_date}
              key={album.id}
            />
          ))}
        </GridList>
      }
      {
        album &&
        <SongList />
      }
      {
        artist && singles &&
        <SinglesList />
      }
    </div>
  );
}

export default withStyles(styles)(AlbumsGrid);