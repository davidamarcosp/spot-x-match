import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ArtistContext } from '../Context/ArtistContext';
import AlbumsGrid from './AlbumsGrid';

const useStyles = makeStyles({
  parent: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '4.5rem'
  },
  root: {
    maxWidth: 345,
    margin: 'auto 0',
    display: 'inline-block'
  }
});

function ArtistAvatar() {
  const classes = useStyles();
  const { artist } = useContext(ArtistContext);
  return (
    <div className={classes.parent}>
      { artist && 
      <React.Fragment>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              variant="square"
              style={{ height: '320px', width: '320px' }}
              src={artist.images[1].url}
            >
            </Avatar>
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {artist.name}
          </Typography>
        </CardContent>
      </Card>
      <AlbumsGrid />
      </React.Fragment>
      }
    </div>
  );
}

export default ArtistAvatar;