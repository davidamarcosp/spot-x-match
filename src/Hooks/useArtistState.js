import SpotifyWebApi from 'spotify-web-api-node';
import { useState } from "react";

export default initialVal => {

  const spotifyApi = new SpotifyWebApi();
  const [artist, setArtist] = useState(initialVal);

  const pickArtist = async (artistName, token) => {

    spotifyApi.setAccessToken(token);
    spotifyApi.searchArtists(artistName, { limit: 1 })
      .then(data => {
        let artistResponse = data.body.artists.items[0];
        if(!artistResponse){
          setArtist(false);
          return;
        }
        let artistMetaData = {
          id: artistResponse.id,
          name: artistResponse.name,
          images: artistResponse.images,
          genres: artistResponse.genres,
          url: artistResponse.external_urls
        }
        spotifyApi.getArtistAlbums(artistResponse.id, { limit: 50 })
          .then(async data => {
            let albumsResponse = data.body.items;
            artistMetaData = {
              ...artistMetaData,
              albums: albumsResponse
                .filter(album => album.album_type === 'album' && album.album_group === 'album')
                .filter((album, index, arr) => {
                  return index === arr.findIndex((a) => {
                    return a.name.toUpperCase() === album.name.toUpperCase()
                  });
                }),
              singles: await Promise.all(albumsResponse
                .filter(album => album.album_type === 'single')
                .filter((single, index, arr) => {
                  return index === arr.findIndex((s) => {
                    return s.name.toUpperCase() === single.name.toUpperCase()
                  });
                })
                .map(async s => {
                  return spotifyApi.getAlbumTracks(s.id)
                    .then(data => {
                      let preview_url = data.body.items[0].preview_url;
                      let name = data.body.items[0].name;
                      let release_date = s.release_date;
                      let image = s.images[2].url;
                      let id = s.id;
                      let singleMetadata = { name, release_date, image, id, preview_url };
                      return singleMetadata;
                    })
                    .catch(e => {
                      console.log(e);
                    })
                }))
            };
            setArtist(artistMetaData);
          })
          .catch(e => {
            console.log(e);
          });
      })
      .catch(e => {
        console.log(e);
      })

  };

  return [artist, pickArtist];

};