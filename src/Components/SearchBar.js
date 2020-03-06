import React, { useContext, useState, useEffect } from 'react';
import useInputState from '../Hooks/useInputState';
import { ArtistContext } from '../Context/ArtistContext';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from "@material-ui/core/styles";
import styles from '../Styles/SearchBarStyles';
import LOGO from '../spotxmatchlogo.svg';

function SearchBar(props) {

  const [value, handleChange, reset] = useInputState("");
  const { artist, pickArtist, album, resetAlbum, lyrics, resetLyrics, isTokenExpired, token } = useContext(ArtistContext);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [artist]);

  return (
    <div>
      {
        !token
          ?
          <CircularProgress
            size={250}
            style={{ color: '#0d47a1', position: 'absolute', left: '50%', marginLeft: '-125px', top: '50%', marginTop: '-200px' }}
          />
          :
          <form
            className={props.classes.form}
            noValidate
            autoComplete="off"
            onSubmit={async (e) => {
              e.preventDefault();
              reset();
              if (value === '') return '';
              await pickArtist(value, await isTokenExpired());
              if (album) resetAlbum();
              if (lyrics) resetLyrics();
              setLoading(true);
            }}
          >
            <TextField
              helperText={artist === false ? 'No results, try again' : ''}
              id="standard-basic"
              label="Search"
              onChange={handleChange}
              value={value}
              placeholder='Artist name...'
              InputProps={{
                classes: {
                  notchedOutline: props.classes.notchedOutline,
                  input: props.classes.placeholder
                },
                className: props.classes.input
              }}
              InputLabelProps={{
                style: {
                  color: '#1e88e5'
                },
                shrink: true,
                margin: 'dense'
              }}
              variant='outlined'
              FormHelperTextProps={{
                classes: {
                  root: props.classes.helper
                }
              }}
            />
            <CircularProgress
              size={30}
              className={props.classes.spinner}
              style={{ opacity: isLoading && artist !== false ? 0.8 : 0 }}
            />
          </form>
      }
      {
        !artist && token &&
        <div
          className={props.classes.landing}
        >
          <img src={LOGO} alt='Logo' style={{ height: '300px' }} />
        </div>
      }
    </div>
  );
};

export default withStyles(styles)(SearchBar);