import SpotifyWebApi from 'spotify-web-api-node';
import useTokenState from '../Hooks/useTokenState';
import { useState } from "react";

export default initialVal => {

  const spotifyApi = new SpotifyWebApi();
  const [isTokenExpired] = useTokenState();
  const [artist, setArtist] = useState(initialVal);

  const pickArtist = async (artistName) => {

    spotifyApi.setAccessToken(isTokenExpired());
    spotifyApi.searchArtists(artistName, { limit: 1 })
    .then(data => {
      let artistResponse = data.body.artists.items[0];
      let artistMetaData = {
        id: artistResponse.id,
        name: artistResponse.name,
        images: artistResponse.images,
        genres: artistResponse.genres,
        url: artistResponse.external_urls
      }
      spotifyApi.getArtistAlbums(artistResponse.id, { limit: 50 })
      .then(data => {
        let albumsResponse = data.body.items;
        artistMetaData = { 
          ...artistMetaData, 
          albums: albumsResponse.filter(album => album.album_type === 'album'), 
          singles: albumsResponse.filter(album => album.album_type === 'single')
        };
        setArtist(artistMetaData);
      })
      .catch(e => {
        console.error(e);
      });
    })
    .catch(e => {
      console.error(e);
    });

  };
  return [artist, pickArtist];
};

