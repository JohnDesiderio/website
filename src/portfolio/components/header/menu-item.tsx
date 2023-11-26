import React from 'react';
import { Link } from '@mui/material';
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
            className={props.toggled ? 'selected-menu-item' : 'unselected-menu-item'} 
            href={`#/portfolio/${props.link}`}
        >
            {props.dir_text}
        </Link>
    )
}

export default MenuItem;