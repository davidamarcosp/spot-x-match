import React from 'react';
// import './App.css';
import SearchBar from './Components/SearchBar';
import ArtistAvatar from './Components/ArtistAvatar';
import { ArtistProvider } from './Context/ArtistContext';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <ArtistProvider>
        <Container maxWidth="lg">
          <SearchBar />
          <ArtistAvatar/>
        </Container>
      </ArtistProvider>
    </div>
  );
}

export default App;
