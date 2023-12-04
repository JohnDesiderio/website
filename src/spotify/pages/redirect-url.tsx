import React, { useEffect } from 'react';
import { Box } from '@mui/material';


const RedirectURL:React.FC<{}> = () => {
    
    useEffect(() => {
        console.log('The page has been accessed let\'s go');
    }, [])
    
    return (
        <Box>
            This is the Spotify page for the redirect url!
        </Box>
    )
}

export default RedirectURL;