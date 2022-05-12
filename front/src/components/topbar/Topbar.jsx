import React from 'react'
import "./topbar.css"
import {NotificationsNoneIcon, GppMaybeIcon} from '@mui/icons-material';


export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Manutan</span>
                </div>
                <div className="topRight">
                    <div className="iconsContainer">
                        <NotificationsNoneIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
