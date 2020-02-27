import React, { useContext } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grow from '@material-ui/core/Grow';
import { withStyles } from "@material-ui/core/styles";
import styles from '../Styles/LyricsStyles';
import IconButton from '@material-ui/core/IconButton';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { ArtistContext } from '../Context/ArtistContext';

function Lyrics(props) {

  const { resetLyrics } = useContext(ArtistContext);

  return (
    <Grow in={props.playing}>
      <div className={props.classes.lyricsWrapper}>
        <div>
          <IconButton
            className={props.classes.button}
            aria-label="delete"
            onClick={() => resetLyrics()}
            size='small'
          >
            <CloseOutlinedIcon />
          </IconButton>
          <TextareaAutosize
            className={props.classes.lyrics}
            rowsMin={20}
            aria-label="maximum height"
            value={props.songLyrics}
          />
        </div>
      </div>
    </Grow>
  );
}

export default withStyles(styles)(Lyrics);