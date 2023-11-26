import React from 'react';
import { Box, Link } from '@mui/material';
import HeaderMenu from './header-menu';
import './styles.css';

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
                    <Link 
                        underline='none' 
                        href='#/portfolio'
                    >
                    John Desiderio
                    </Link>
                </Box>
            </Box>
            <Box className="header-child-box-right" display='block' flexDirection='row' justifyContent='end'>
                <HeaderMenu toggled={props.value}/>
            </Box>
        </Box>
    )
}

export default Header;