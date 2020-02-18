import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function Lyrics(props) {
  return (
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
          textAlign: 'center',
          marginLeft: '20px'
        }}
      />
    </div>
  );
}

export default Lyrics;