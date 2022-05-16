
import React from 'react';
import { Setting } from 'react-iconly';
import "./sidebar.css";


export default function Sidebar() {
  return (
    <div style={{
      flex: 1,
      height: 'calc(100vh - 50px)',
      position: 'sticky',
      top: '50px',
      borderRight: '2px solid #F0F0F0',
      }}>
      <div style={{
        padding: '78px 20px',
        color: '#BDBDBD',
        }}>
        <div style={{ marginBottom: '10px', }}>
          <ul style={{
            listStyle: 'none',
            padding: '5px'
          }}>
            <li className="sidebarListItems active">
            
              Overview
            </li>
            <li className="sidebarListItems">
             
              Course
            </li>
            <li className="sidebarListItems">
              Resources
            </li>
            <li className="sidebarListItems">
              Messages
            </li>
            <li className="sidebarListItems">
              Settings
            </li>
          </ul>
          <img src="/img/caracter.svg" 
          alt="caracter" 
          style={{
            marginTop: '170px',
          }} />
        </div>
      </div>
    </div>
  )
}
