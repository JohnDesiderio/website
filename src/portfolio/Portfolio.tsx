import { ReactDOM } from 'react';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import Resume from './pages/Resume';

const Portfolio:React.FC<{}> = () => {
    
    useEffect(() => {
        console.log('Hello world!')
    }, [])
    
    return (
        <Container>
            Portfolio, Portfolio
        </Container>
    )
}

export default Portfolio;