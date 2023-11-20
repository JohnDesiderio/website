import React from 'react';
import { Box, Typography, BoxProps } from '@mui/material';
import {ReactComponent as Folder} from '../icons/folder.svg';
import { Link } from 'react-router-dom';
import '../styles.css';

interface IPathGuide {
    additional_style?: string,
    directory_text: string,
    link: string,
}

type PathGuideProps = BoxProps & IPathGuide;

const PathGuide:React.FC<PathGuideProps> = (props: PathGuideProps) => {
    return (
        <Link to={`${props.link}`}>
            <Box className={`box-link ${props.additional_style}`}>
                <Box className='text-box' display='flex' flexDirection='row' alignItems='center'>
                    <Folder className='svg-element'/> 
                    <Typography
                        sx={{
                            fontSize: 'clamp(1rem, 2rem, 2rem)',
                            paddingTop: '10px'
                        }}
                    >
                        &ensp;{props.directory_text}
                    </Typography>
                </Box>
            </Box>
        </Link>
    )
}

export default PathGuide;