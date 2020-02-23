import React, { useContext } from 'react';
import { ArtistContext } from '../Context/ArtistContext';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  }
});

function Album(props) {

  const { artist, pickAlbum, isTokenExpired } = useContext(ArtistContext);
  const classes = useStyles();

  return (
    <div style={{ margin: artist.albums.length < 3 ? 'auto' : '' }}>
      <GridListTile key={props.albumId} style={{ margin: '0.5px' }} >
        <img src={props.albumCover} alt={'Album cover'} style={{ height: '220px', width: '220px' }} />
        <GridListTileBar
          title={props.albumName}
          subtitle={<span>Released: {props.releasedDate}</span>}
          actionIcon={
            <IconButton
              className={classes.icon}
              onClick={ async () => await pickAlbum(props.albumId, await isTokenExpired()) }
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
    </div>
  );
}

export default Album;