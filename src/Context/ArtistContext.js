import React, { createContext } from 'react';
import useArtistState from '../Hooks/useArtistState';
import useAlbumState from '../Hooks/useAlbumState';
import useLyricState from '../Hooks/useLyricState';
import useSongState from '../Hooks/useSongState';

export const ArtistContext = createContext();

export function ArtistProvider(props) {

  const [artist, pickArtist] = useArtistState();
  const [album, pickAlbum, resetAlbum] = useAlbumState();
  const [lyrics, pickLyrics, resetLyrics] = useLyricState();
  const [song, pickSong, playing, play] = useSongState();

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
        resetLyrics,
        song,
        pickSong,
        playing,
        play 
      }}
    >
      {props.children}
    </ArtistContext.Provider>
  );
};