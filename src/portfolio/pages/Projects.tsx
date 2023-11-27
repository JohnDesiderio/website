import { Box } from '@mui/material';
import Header from '../components/header/header';
import SpotifyMixer from '../components/projects/examples/spotify-mixer';
import Recommender from '../components/projects/examples/recommender';

export const Projects:React.FC<{}> = () => {
    return (
        <Box display='flex' flexDirection='column' className='bg-red-50 portfolio-page'>
            <Header value={2} />
            <Box
                className='page-header'
            >
                Projects
            </Box>
            <SpotifyMixer/>
            <Recommender/>
        </Box>
    )
}

export default Projects;