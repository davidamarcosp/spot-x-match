import React, { useContext } from 'react';
import { ArtistContext } from '../Context/ArtistContext';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Lyrics from '../Components/Lyrics';
import Single from '../Components/Single';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Styles/SinglesListStyles';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function SinglesList(props) {

  const { artist, lyrics, playing } = useContext(ArtistContext);

  return (
    <div className={props.classes.root}>
      <List
        className={props.classes.list}
        component="nav"
        aria-label="song list"
        style={{ width: lyrics ? '370px' : '450px' }}
      >
        <Divider />
        {artist.singles.map((single) => {
          return (<Single
            songName={single.name}
            songImage={single.image}
            singleID={single.id}
            key={single.id}
            releasedDate={single.release_date}
            songUrl={single.preview_url}
          />)
        })}
      </List>
      {
        lyrics === false &&
        <Snackbar
          open={true}
          message='NO LYRICS AVAILABLE'
          TransitionComponent={TransitionUp}
          ContentProps={{
            classes: {
              message: props.classes.snackbarText,
              root: props.classes.snackbar
            }
          }}
        />
      }
      {
        lyrics &&
        <Lyrics songLyrics={lyrics} playing={playing} />
      }
    </div>
  );
};

export default withStyles(styles)(SinglesList);