import React, { useContext } from 'react';
import { ArtistContext } from '../Context/ArtistContext';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Styles/AlbumStyles';

function Album(props) {

  const { artist, pickAlbum, isTokenExpired } = useContext(ArtistContext);

  return (
    <div style={{ margin: artist.albums.length < 3 ? 'auto' : '' }}>
      <GridListTile
        className={props.classes.albumGrid}
        key={props.albumId}
      >
        <img
          className={props.classes.albumArt}
          src={props.albumCover}
          alt={'Album cover'}
        />
        <GridListTileBar
          title={props.albumName}
          subtitle={<span>Released: {props.releasedDate}</span>}
          actionIcon={
            <IconButton
              className={props.classes.icon}
              onClick={async () => await pickAlbum(props.albumId, await isTokenExpired())}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
    </div>
  );
}

export default withStyles(styles)(Album);