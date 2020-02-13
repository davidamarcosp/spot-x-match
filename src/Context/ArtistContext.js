import React, { createContext } from 'react';
import useArtistState from '../Hooks/useArtistState';
import useAlbumState from '../Hooks/useAlbumState';

export const ArtistContext = createContext();

export function ArtistProvider(props) {

  const [artist, pickArtist] = useArtistState();
  const [album, pickAlbum, resetAlbum] = useAlbumState();

  return (
    <ArtistContext.Provider value={{ artist, pickArtist, album, pickAlbum, resetAlbum }}>
      {props.children}
    </ArtistContext.Provider>
  );
};