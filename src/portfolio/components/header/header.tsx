import React from 'react';
import { Box, Link } from '@mui/material';
import HeaderMenu from './header-menu';
import './styles.css';
import MenuItem from './menu-item';

interface IHeaderProps {
    value: number
}


const Header:React.FC<IHeaderProps> = (props: IHeaderProps) => {
    return (
        <Box 
            className='header-box' 
            flexDirection='row'
            display={{
                xs: 'none',
                sm: 'none',
                md: 'none',
                lg: 'flex',
                xl: 'flex',
            }}  
        >
            <Box className="header-child-box-left">
                <Box>
                   <MenuItem toggled={props.value === 0} dir_text='Portfolio' link='#/portfolio'/> 
                </Box>
            </Box>
            <Box className="header-child-box-right" display='block' flexDirection='row' justifyContent='end'>
                <HeaderMenu toggled={props.value}/>
            </Box>
        </Box>
    )
}

export default Header;