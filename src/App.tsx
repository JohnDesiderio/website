import { Routes, Route } from 'react-router-dom';
import SpotifyMixer from './spotify/Spotify-Mixer';
import Portfolio from './portfolio/Portfolio';
import Homepage from './Homepage/Homepage';
import About from './portfolio/pages/About';
import Resume from './portfolio/pages/Resume';
import Projects from './portfolio/pages/Projects';
import ContactMe from './portfolio/pages/Contact-Me';

function App() {
  return (
      <Routes>
        <Route>
          <Route path='/' element={<Homepage/>}/>
          <Route index path='/website/' element={<Homepage/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/portfolio/about' element={<About/>}/>
          <Route path='/portfolio/Resume' element={<Resume/>}/>
          <Route path='/portfolio/Projects' element={<Projects/>}/>
          <Route path='/portfolio/Contact-Me' element={<ContactMe/>}/>
          <Route path='/playlist-mixer' element={<SpotifyMixer/>}/>
        </Route> 
      </Routes>    
  );
}

export default App;
