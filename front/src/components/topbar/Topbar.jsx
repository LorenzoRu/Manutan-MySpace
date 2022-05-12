import React from 'react'
import "./topbar.css"
import { NotificationsNone, Cookie, Settings } from '@mui/icons-material';
import { Avatar, Badge } from '@mui/material';
import { deepPurple } from '@mui/material/colors';



export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Manu'Board</span>
                </div>
                <div className="topRight">
                    <Badge className="iconsContainer" color='error' badgeContent="100" max="99">
                        <NotificationsNone />
                    </Badge>
                    <Cookie className="iconsContainer" />
                    <Settings className="iconsContainer" />
                    <Avatar sx={{bgcolor: deepPurple[300]}}>S</Avatar>
                </div>
            </div>
        </div>
    )
}
