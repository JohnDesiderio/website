import React from 'react';
import { Link, Box } from '@mui/material';
import './styles.css';

interface IMenuItem {
    toggled: boolean,
    dir_text: string,
    link: string, 
}

const MenuItem:React.FC<IMenuItem> = (props: IMenuItem) => {

    return (
        <Link
            underline='none'
            href={`#/portfolio/${props.link}`}
        >
            <Box
                className={`${props.toggled ? 'selected-menu-item' : 'unselected-menu-item hover:bg-red-400'} menu-item`} 
                justifyContent='center'
                display='flex'
                alignItems='center'
            >
                {props.dir_text}
            </Box>

        </Link>
    )
}

export default MenuItem;