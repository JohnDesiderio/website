import React, { useState } from 'react';
import { 
    Box, 
    Typography,
    Drawer,
} from '@mui/material';
import './styles.css';
import { FaCompass } from 'react-icons/fa'
import SmallMenuDrawer from './small-menu-drawer';

interface ISmallerHeader {
    value: number,
}

const SmallerHeader:React.FC<ISmallerHeader> = (props: ISmallerHeader) => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    return (
        <Box>
            <Box
                onClick={() => {
                    setOpenDrawer(true);
                }}
                className='smaller-header'
                display={{
                    xs: 'flex',
                    sm: 'flex',
                    md: 'flex',
                    lg: 'none',
                    xl: 'none',
                }}
                justifyContent='center'
                alignItems='center'
            >  
                <FaCompass
                    style={{
                        height: '40px',
                        width: '40px'
                    }}
                />
                
            </Box>
            <Drawer
                anchor='top'
                open={openDrawer}
                onClose={() => {
                    setOpenDrawer(false);
                }}
            >
                <SmallMenuDrawer value={props.value}/> 
            </Drawer>
        </Box>
    )
}

export default SmallerHeader;