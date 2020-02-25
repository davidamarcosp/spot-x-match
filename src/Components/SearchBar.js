import React, { useContext, useState, useEffect } from 'react';
import useInputState from '../Hooks/useInputState';
import { ArtistContext } from '../Context/ArtistContext';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from "@material-ui/core/styles";
import styles from '../Styles/SearchBarStyles';

function SearchBar(props) {

  const [value, handleChange, reset] = useInputState("");
  const { artist, pickArtist, album, resetAlbum, lyrics, resetLyrics, isTokenExpired, handleSingleChange } = useContext(ArtistContext);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [artist]);

  return (
    <form
      className={props.classes.form}
      noValidate
      autoComplete="off"
      onSubmit={ async (e) => {
        e.preventDefault();
        reset();
        if (value === '') return '';
        await pickArtist(value, await isTokenExpired());
        if (album) resetAlbum();
        if (lyrics) resetLyrics();
        handleSingleChange(false);
        setLoading(true);
      }}
    >
      <TextField
        id="standard-basic"
        label="Search"
        onChange={handleChange}
        value={value}
        placeholder='Artist name...'
        InputProps={{
          classes: {
            notchedOutline: props.classes.notchedOutline
          },
          className: props.classes.input
        }}
        InputLabelProps={{
          style: {
            color: 'gray'
          },
          shrink: true,
          margin: 'dense'
        }}
        variant='outlined'
      />
      <CircularProgress
        size={30}
        className={props.classes.spinner}
        style={{ opacity: isLoading ? 0.8 : 0 }}
      />
    </form>
  );
};

export default withStyles(styles)(SearchBar);