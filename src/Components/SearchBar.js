import React, { useContext } from 'react';
import useInputState from '../Hooks/useInputState';
import { ArtistContext } from '../Context/ArtistContext';
import TextField from '@material-ui/core/TextField';


function SearchBar() {

  const [value, handleChange, reset] = useInputState("");
  const { pickArtist, songs, resetSongs } = useContext(ArtistContext);

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        reset();
        if(songs) resetSongs();
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