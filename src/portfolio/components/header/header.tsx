import React from 'react';
import { Box, Link } from '@mui/material';
import HeaderMenu from './header-menu';
import './styles.css';

interface IHeaderProps {
    value: number
}

const Header:React.FC<IHeaderProps> = (props: IHeaderProps) => {
    return (
        <Box className='header-box' display='flex' flexDirection='row'>
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
            <Box className="header-child-box-right">
                <HeaderMenu toggled={props.value}/>
            </Box>
        </Box>
    )
}

export default Header;