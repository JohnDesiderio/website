import { Box } from '@mui/material';
import Header from '../components/header/header';
import SpotifyMixer from '../components/projects/examples/spotify-mixer';
import Recommender from '../components/projects/examples/recommender';
import GroupMeBot from '../components/projects/examples/groupme-bot';
import DiscreteEvent from '../components/projects/examples/event-simulator';
import Bookstore from '../components/projects/examples/bookstore';
import PeripheralSimulator from '../components/projects/examples/peripheral-simulator';
import ProgressiveWebApp from '../components/projects/examples/progressive-web-app';

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
            <PeripheralSimulator/>
            <ProgressiveWebApp/>
            <GroupMeBot/>
            <Recommender/>
            <DiscreteEvent/>
            <Bookstore/>
        </Box>
    )
}

export default Projects;