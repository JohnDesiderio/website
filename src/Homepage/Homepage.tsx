import React from 'react';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom'

const Homepage:React.FC<{}> = () => {
    return (
        <Container className="font-bold">
            This is landing page and place for redirecting toward other pages.
            <Link to='/website/portfolio'>Click Me!</Link>

            <Button href='/website/portfolio'>Portfolio</Button>
        </Container>
    )
}

export default Homepage;