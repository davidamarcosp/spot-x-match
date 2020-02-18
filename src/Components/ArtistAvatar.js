import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ArtistContext } from '../Context/ArtistContext';

import ReactPlayer from 'react-player'

const useStyles = makeStyles({
  parent: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '4.5rem'
  },
  root: {
    maxWidth: 345,
    marginBottom: '20px',
    display: 'inline-block'
  },
  player: {
    color: 'red',
    '&:focus': {
      outline: 'none !important',
      outlineOffset: 'none !important'
    }
  }
});

function ArtistAvatar() {
  const classes = useStyles();
  const { artist, song, playing } = useContext(ArtistContext);
  return (
    <div className={classes.parent}>
      {artist &&
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
              <Typography gutterBottom variant="h5" component="h2" align='center'>
                {artist.name}
              </Typography>
            </CardContent>
          </Card>
          <ReactPlayer
            url={song}
            playing={playing}
            controls
            height={50}
            width={330}
            config={{ file: { attributes: { controlsList: 'nodownload' } } }} // Disable download button
            onContextMenu={e => e.preventDefault()} // Disable right click
            className={classes.player}
            style={{ outline: 'none' }}
          />
        </div>
      }
    </div>
  );
}

export default ArtistAvatar;