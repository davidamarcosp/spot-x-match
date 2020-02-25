import SpotifyWebApi from 'spotify-web-api-node';
import { useState } from "react";

export default initialVal => {

  const spotifyApi = new SpotifyWebApi();
  const [album, setAlbum] = useState(initialVal);

  const pickAlbum = async (albumID, token) => {

    spotifyApi.setAccessToken(token);
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