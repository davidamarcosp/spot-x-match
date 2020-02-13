import React, { useContext } from 'react';
import { ArtistContext } from '../Context/ArtistContext';
import useLyricState from '../Hooks/useLyricState';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 680,
    maxHeight: 680,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  }
}));

function AlbumsGrid() {


  const { artist, album, pickAlbum, resetAlbum } = useContext(ArtistContext);
  const [lyrics, pickLyrics, resetLyrics] = useLyricState();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {artist && !album &&
        <GridList cellHeight='auto' className={classes.gridList} cols={3} spacing={5}>
          {artist.albums.map(album => (
            <GridListTile key={album.id}>
              <img src={album.images[1].url} alt={'Album cover'} style={{ height: '220px', width: '220' }} />
              <GridListTileBar
                title={album.name}
                subtitle={<span>Released: {album.release_date}</span>}
                actionIcon={
                  <IconButton
                    className={classes.icon}
                    onClick={() => pickAlbum(album.id)}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      }
      {
        album &&
        <React.Fragment>
          <button onClick={() => { resetAlbum(); resetLyrics() }}>BACK</button>
          <List component="nav" className={classes.list} aria-label="mailbox folders" style={{ marginRight: 'auto ' }}>
            {album.map(song => {
              return (
                <React.Fragment>
                  <ListItem button>
                    <ListItemText 
                      primary={song.name} 
                      onClick={() => {
                        pickLyrics(artist, song);
                      }}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              )
            })}
          </List>
          <p>{lyrics}</p>
        </React.Fragment>
      }
    </div>
  );
}

export default AlbumsGrid;