import SpotifyWebApi from 'spotify-web-api-node';
import { useState } from "react";

export default initialVal => {

  const spotifyApi = new SpotifyWebApi();
  const [album, setAlbum] = useState(initialVal);

  const pickAlbum = async (albumID, token) => {

    spotifyApi.setAccessToken(token);
    spotifyApi.getAlbumTracks(albumID)
    .then(data => {
      // let asd = data.body.items.filter(song => song.preview_url !== null);
      // console.log(asd);
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