import React from 'react';
import { LineStyle, Timeline, TrendingUp, PersonOutline, Storefront, Euro, Equalizer, Mail, FeedbackOutlined, MessageOutlined, WorkOutlineOutlined, ReportGmailerrorredOutlined } from "@mui/icons-material"
import "./sidebar.css"



export default function Sidebar() {
  return (
    <div style={{
      flex: 1,
      height: 'calc(100vh - 50px)',
      position: 'sticky',
      top: '50px',
      backgroundColor: 'lightgray',
    }}>
      <div style={{
        padding: '20px',
        color: '#555',
      }}>
        <div style={{ marginBottom: '10px', }}>

          <h3 style={{
            fontSize: '16px',
            color: "darkorchid"
          }}>Dashboard</h3>
          <ul style={{
            listStyle: 'none',
            padding: '5px'
          }}>
            <li className="sidebarListItems active">
              <LineStyle className='sidebarIcons' />
              Home
            </li>
            <li className="sidebarListItems">
              <Timeline className='sidebarIcons' />
              Analytics
            </li>
            <li className="sidebarListItems">
              <TrendingUp className='sidebarIcons' />
              Sales
            </li>
          </ul>
          <h3 style={{
            fontSize: '16px',
            color: "darkorchid"
          }}>Quick Menu</h3>
          <ul style={{
            listStyle: 'none',
            padding: '5px'
          }}>
            <li className="sidebarListItems">
              <PersonOutline className='sidebarIcons' />
              Users
            </li>
            <li className="sidebarListItems">
              <Storefront className='sidebarIcons' />
              Products
            </li>
            <li className="sidebarListItems">
              <Euro className='sidebarIcons' />
              Transactions
            </li>
            <li className="sidebarListItems">
              <Equalizer className='sidebarIcons' />
              Reports
            </li>
          </ul>
          <h3 style={{
            fontSize: '16px',
            color: "darkorchid"
          }}>Notification</h3>
          <ul style={{
            listStyle: 'none',
            padding: '5px'
          }}>
            <li className="sidebarListItems">
              <Mail className='sidebarIcons' />
              Mail
            </li>
            <li className="sidebarListItems">
              <FeedbackOutlined className='sidebarIcons' />
              Feedback
            </li>
            <li className="sidebarListItems">
              <MessageOutlined className='sidebarIcons' />
              Sales
            </li>
          </ul>
          <h3 style={{
            fontSize: '16px',
            color: "darkorchid"
          }}>Staff</h3>
          <ul style={{
            listStyle: 'none',
            padding: '5px'
          }}>
            <li className="sidebarListItems">
              <WorkOutlineOutlined className='sidebarIcons' />
              Manage
            </li>
            <li className="sidebarListItems">
              <Timeline className='sidebarIcons' />
              Analytics
            </li>
            <li className="sidebarListItems">
              <ReportGmailerrorredOutlined className='sidebarIcons' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
