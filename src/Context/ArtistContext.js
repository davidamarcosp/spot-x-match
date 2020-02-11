import React, { createContext, useState } from 'react';

export const ArtistContext = createContext();

export function ArtistProvider(props) {
  const [artist, setArtist] = useState();
  const pickArtist = (artistData) => setArtist(artistData);
  return (
    <ArtistContext.Provider value={{ artist, pickArtist }}>
      {props.children}
    </ArtistContext.Provider>
  );
};