import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grow from '@material-ui/core/Grow';

function Lyrics(props) {

  return (
    <Grow in={props.playing}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TextareaAutosize
          rowsMin={20}
          aria-label="maximum height"
          value={props.songLyrics}
          style={{
            color: 'gray',
            fontFamily: 'Roboto',
            width: '200px',
            minWidth: '300px',
            maxWidth: '300px',
            height: 'auto',
            maxHeight: '676px',
            textAlign: 'center',
            marginLeft: '20px'
          }}
        />
      </div>
    </Grow>
  );
}

export default Lyrics;