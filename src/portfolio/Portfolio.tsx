import { ReactDOM } from 'react';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Container, Button } from '@mui/material';
import Resume from './pages/Resume';

const Portfolio:React.FC<{}> = () => {
    
    return (
        <Container>
            Portfolio, Portfolio

            <Button href='/website/'>Click Me!</Button>
        </Container>
    )
}

export default Portfolio;