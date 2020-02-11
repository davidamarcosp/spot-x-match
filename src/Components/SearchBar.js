import React, { useContext } from 'react';
import useInputState from '../Hooks/useInputState';
import useTokenState from '../Hooks/useTokenState';
import { ArtistContext } from '../Context/ArtistContext';
import SpotifyWebApi from 'spotify-web-api-node';
import TextField from '@material-ui/core/TextField';


function SearchBar() {

  const spotifyApi = new SpotifyWebApi();
  const [isTokenExpired] = useTokenState(false);
  const [value, handleChange, reset] = useInputState("");
  const { pickArtist } = useContext(ArtistContext);

  function Search(value){
    console.log('Searched: ', value);
    spotifyApi.setAccessToken(isTokenExpired());
    spotifyApi.searchArtists(value, { limit: 1 })
    .then((data) => {
      let artistResponse = data.body.artists.items[0];
      let artistMetaData = {
        id: artistResponse.id,
        name: artistResponse.name,
        images: artistResponse.images,
        genres: artistResponse.genres,
        url: artistResponse.external_urls
      }
      spotifyApi.getArtistAlbums(artistResponse.id)
      .then((data) => {
        let albumsResponse = data.body.items;
        artistMetaData = { ...artistMetaData, albums: albumsResponse };
        pickArtist(artistMetaData);
      })
      .catch(e => {
        console.error(e);
      });
    })
    .catch(e => {
      console.error(e);
    });
  };

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault();
        reset();
        Search(value);
      }}
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