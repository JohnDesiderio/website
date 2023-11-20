import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpotifyMixer from './spotify/Spotify-Mixer';
import Portfolio from './portfolio/Portfolio';
import Homepage from './Homepage/Homepage';
import About from './portfolio/pages/About';
import Resume from './portfolio/pages/Resume';
import Projects from './portfolio/pages/Projects';
import ContactMe from './portfolio/pages/Contact-Me';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Homepage/>}/>
          <Route index path='/website/' element={<Homepage/>}/>
          <Route path='/website/portfolio' element={<Portfolio/>}/>
          <Route path='/website/portfolio/about' element={<About/>}/>
          <Route path='/website/portfolio/Resume' element={<Resume/>}/>
          <Route path='/website/portfolio/Projects' element={<Projects/>}/>
          <Route path='/website/portfolio/Contact-Me' element={<ContactMe/>}/>
          <Route path='/website/playlist-mixer' element={<SpotifyMixer/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
