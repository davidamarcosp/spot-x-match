import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import ArtistAvatar from './Components/ArtistAvatar';
import AlbumsGrid from './Components/AlbumsGrid';
import { ArtistProvider } from './Context/ArtistContext';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <ArtistProvider>
        <SearchBar />
        <Container className="container" maxWidth="lg" >
          <ArtistAvatar />
          <AlbumsGrid />
        </Container>
      </ArtistProvider>
    </div>
  );
}

export default App;
