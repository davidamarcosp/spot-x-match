import React, { useContext } from 'react';
import useInputState from '../Hooks/useInputState';
import { ArtistContext } from '../Context/ArtistContext';
import TextField from '@material-ui/core/TextField';


function SearchBar() {

  const [value, handleChange, reset] = useInputState("");
  const { pickArtist, album, resetAlbum, lyrics, resetLyrics } = useContext(ArtistContext);

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        reset();
        if(album) resetAlbum();
        if(lyrics) resetLyrics();
        pickArtist(value);
      }}
      style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
    >
      <TextField
        id="standard-basic"
        label="Search"
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};

export default SearchBar;