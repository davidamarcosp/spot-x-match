import React, { createContext } from 'react';
import useArtistState from '../Hooks/useArtistState';
import useAlbumState from '../Hooks/useAlbumState';
import useLyricState from '../Hooks/useLyricState';

export const ArtistContext = createContext();

export function ArtistProvider(props) {

  const [artist, pickArtist] = useArtistState();
  const [album, pickAlbum, resetAlbum] = useAlbumState();
  const [lyrics, pickLyrics, resetLyrics] = useLyricState();

  return (
    <ArtistContext.Provider 
      value={{ 
        artist, 
        pickArtist, 
        album, 
        pickAlbum, 
        resetAlbum,
        lyrics,
        pickLyrics,
        resetLyrics 
      }}
    >
      {props.children}
    </ArtistContext.Provider>
  );
};