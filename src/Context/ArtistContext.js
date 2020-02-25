import React, { createContext } from 'react';
import useArtistState from '../Hooks/useArtistState';
import useAlbumState from '../Hooks/useAlbumState';
import useLyricState from '../Hooks/useLyricState';
import useSongState from '../Hooks/useSongState';
import useTokenState from '../Hooks/useTokenState';
import useSingleState from '../Hooks/useSingleState';

export const ArtistContext = createContext();

export function ArtistProvider(props) {

  const [artist, pickArtist] = useArtistState();
  const [album, pickAlbum, resetAlbum] = useAlbumState();
  const [lyrics, pickLyrics, resetLyrics] = useLyricState();
  const [song, pickSong, playing, play] = useSongState();
  const [isTokenExpired] = useTokenState();
  const [singles, handleSingleChange, resetSingles] = useSingleState(false);

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
        play,
        isTokenExpired,
        singles,
        handleSingleChange,
        resetSingles
      }}
    >
      {props.children}
    </ArtistContext.Provider>
  );
};