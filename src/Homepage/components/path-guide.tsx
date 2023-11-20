import React from 'react';
import { Box, Typography, BoxProps, Button } from '@mui/material';
import { BsFolder2Open } from 'react-icons/bs';
import '../styles.css';

interface IPathGuide {
    additional_style?: string,
    directory_text: string,
    link: string,
}

type PathGuideProps = BoxProps & IPathGuide;

const PathGuide:React.FC<PathGuideProps> = (props: PathGuideProps) => {
    return (
        <Button href={`${props.link}`}>
            <Box 
                className='text-box' 
                display='flex' 
                flexDirection='row' 
                alignItems='center'
            >
                <BsFolder2Open className='svg-element'/>
                <Typography
                    sx={{
                        fontSize: 'clamp(1rem, 2rem, 2rem)',
                        paddingTop: '10px'
                    }}
                >
                    &ensp;{props.directory_text}
                </Typography>
            </Box>
        </Button>
    )
}

export default PathGuide;