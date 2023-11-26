import React, { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import Header from './components/header/header';

const Portfolio:React.FC<{}> = () => {
    
    return (
        <Box>
            <Header value={0}/>
            Portfolio, Portfolio

            <Button href='/website/'>Click Me!</Button>
        </Box>
    )
}

export default Portfolio;