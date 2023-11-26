import React from 'react';
import { 
    Box,
    ListItemButton,
    List,
} from '@mui/material';

interface ISmallMenuDrawer {
    value: number;
}

const SmallMenuDrawer:React.FC<ISmallMenuDrawer> = (props: ISmallMenuDrawer) => {
    return (
        <Box
            role='presentation'
        >
            <List>
                <ListItemButton 
                    href='./#/portfolio'
                    disabled={props.value===0}
                >
                    Homepage
                </ListItemButton>
                <ListItemButton 
                    href='#/portfolio/resume'
                    disabled={props.value===1}
                >
                    Resume
                </ListItemButton>
                <ListItemButton 
                    href='#/portfolio/projects'
                    disabled={props.value===2}
                >
                    Projects
                </ListItemButton>
                <ListItemButton 
                    href='#/portfolio/about'
                    disabled={props.value===3}
                >
                    About
                </ListItemButton>
                <ListItemButton 
                    href='#/portfolio/contact-me'
                    disabled={props.value===4}
                >
                    Contact Me
                </ListItemButton>
            </List>
        </Box>
    )
}

export default SmallMenuDrawer;