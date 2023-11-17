import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpotifyMixer from './spotify/Spotify-Mixer';
import Portfolio from './portfolio/Portfolio';
import Homepage from './Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index path='/website/' element={<Homepage/>}/>
          <Route path='/website/portfolio' element={<Portfolio/>}/>
          <Route path='/website/playlist-mixer' element={<SpotifyMixer/>}/>
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
