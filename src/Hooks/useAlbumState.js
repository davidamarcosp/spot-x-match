import SpotifyWebApi from 'spotify-web-api-node';
// import useTokenState from '../Hooks/useTokenState';
import { useState } from "react";

export default initialVal => {

  const spotifyApi = new SpotifyWebApi();
  // const [isTokenExpired] = useTokenState();
  const [album, setAlbum] = useState(initialVal);

  const pickAlbum = async (albumID) => {

    spotifyApi.setAccessToken(localStorage.getItem('token'));
    spotifyApi.getAlbumTracks(albumID)
    .then(data => {
      setAlbum(data.body.items);
    })
    .catch(e => {
      console.error(e);
    });

  };

  const resetAlbum = () => {
    setAlbum();
  };

  return [album, pickAlbum, resetAlbum];
};