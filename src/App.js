import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import ArtistAvatar from './Components/ArtistAvatar';
import { ArtistProvider } from './Context/ArtistContext';

function App() {
  return (
    <div className="App">
      <ArtistProvider>
        <SearchBar />
        <ArtistAvatar/>
      </ArtistProvider>
    </div>
  );
}

export default App;
