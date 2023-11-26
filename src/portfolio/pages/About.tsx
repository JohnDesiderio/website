import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/header/header';

export const About:React.FC<{}> = () => {
    
    return (
        <Box>
            <Header value={3} />
            About, About
        </Box>
    )
}

export default About;