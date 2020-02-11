import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ArtistContext } from '../Context/ArtistContext';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 auto',
    marginTop: '3rem'
  }
});

function ArtistAvatar() {
  const classes = useStyles();
  const { artist } = useContext(ArtistContext);
  return (
    <div>
      { artist && 
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
      }
    </div>
  );
}

export default ArtistAvatar;