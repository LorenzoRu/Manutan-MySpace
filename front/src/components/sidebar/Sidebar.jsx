
import { Avatar, AvatarGroup } from '@mui/material';
import React from 'react';
import "./sidebar.css";
import { Logout } from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div style={{
      flex: 1,
      width: '160px',
      position: 'sticky',
      top: '50px',
      borderRight: '2px solid #F0F0F0',
      backgroundColor: '#fff',
      }}>
      <div style={{
        padding: '0px 20px',
        color: '#BDBDBD',
        }}>
        <div style={{ marginBottom: '10px', }}>
          <ul style={{
            listStyle: 'none',
            padding: '5px',
            marginTop: '68px',
          }}>
            <li className="sidebarListItems active">
            
              Overview
            </li>
            <li className="sidebarListItems">
             
              Panier
            </li>
            <li className="sidebarListItems">
              Messagerie 
            </li>
            <li className="sidebarListItems">
              Document
            </li>
            <li className="sidebarListItems">
              Paramètres
            </li>
          </ul>

        </div>
          <img src="/img/caracter.svg" 
          alt="caracter" 
          style={{
            marginTop: '170px',
          }} />
          <div style={{height: 100, backgroundColor: '#EBF5FF', marginTop: 'px', borderRadius: "18px",padding: "5px 5px"}}>
          <span style={{fontSize: "15px", color: 'black'}}>Collaborateurs connectés</span>
          <div style={{marginTop: '25px', display:'flex', alignItems: 'center'}}>
            <AvatarGroup max={3}>
              <Avatar alt="Remy Sharp" src="/img/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/img/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/img/avatar/3.jpg" />
            </AvatarGroup>
            <Logout style={{color:'black', width: '24px', marginLeft: '25px'}}/>
          </div>
          </div>
      </div>
    </div>
  )
}
