import React from 'react';
import { Box } from '@mui/material';
import MenuItem from './menu-item';

interface IHeaderMenu {
    toggled: number;
}

const HeaderMenu:React.FC<IHeaderMenu> = (props: IHeaderMenu) => {
    return (
        <Box className='header-menu-box'>
            <MenuItem toggled={props.toggled === 1} dir_text='Resume' link='resume'/>
            <MenuItem toggled={props.toggled === 2}  dir_text='Projects' link='projects'/>
            <MenuItem toggled={props.toggled === 3}  dir_text='About' link='about'/>
            <MenuItem toggled={props.toggled === 4}  dir_text='Contact Me' link='contact-me'/>
        </Box>
    )
}

export default HeaderMenu;