import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import SpotifyThanks from '../spotify-thanks/SpotifyThanks';
import ButtonGrid from '../buttons/button-grid';
import './styles.css';

const SpotifyMixerGrid:React.FC<{}> = () => {
    return (
        <Grid 
            container 
            className='spotify-mixer-grid bg-blue-100 justify-center'
            display='flex'
            alignItems='center'
            flexDirection='column'
        >
            <Typography 
                display='block'
                sx={{
                    marginTop: '15px',
                    fontSize: '1.5rem',
                }}
            >
                Spotify Song Mixer for Friends!
            </Typography>
            <SpotifyThanks/>
            <ButtonGrid/>
        </Grid>
    )
}

export default SpotifyMixerGrid;