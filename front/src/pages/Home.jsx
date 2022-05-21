import { Button } from '@mui/material'
import React from 'react'
import {Outlet, NavLink } from 'react-router-dom'
import Summary from '../components/summary/Summary'

export default function Home() {

  let activeClassName = 'contained';
  let unactive = 'outlined';
  return (
    <div style={{
      height: 'calc(100vh - 50px)',
        flex: 3,
        padding: '1px 30px 0',
    }}>
      <p style={{
        fontSize: '15px',
        color: '#369FFF',
      }}>Bonjour <span style={{
        fontWeight: 'bold',
      }}>Lou</span>, Welcome back !</p>
      <h2 style={{
        marginTop: '15px',
        fontSize: '20px',
    }}>
      Suivi de commande</h2>
      <Summary />
      <section className='widgetWrapper'
      style={{
        marginTop: '15px',
        height: '74%',
        backgroundColor: '#F3F4F8',
        borderRadius: '18px 18px 0 0',
        padding: ' 10px 0 0 25px',
        overflow: 'scroll'
      }}>
        <nav
          style={{
            paddingBottom: "1rem",
          }}
        >
          <NavLink to="/general" style={{textDecoration: 'none'}}>
            {({isActive})=>(
               <Button variant={isActive ? activeClassName : unactive} style={{textTransform: 'none',
              borderRadius: '50px',
              marginRight: '10px',
              width: '100px',
              }}>
              Général</Button> 
            )}    
            </NavLink>
          <NavLink to="/budget" style={{textDecoration: 'none'}}>
            {({isActive})=>(
               <Button variant={isActive ? activeClassName : unactive} style={{textTransform: 'none',
              borderRadius: '50px',
              marginRight: '10px',
              width: '100px',
              }}>
              Budget</Button> 
            )}    
            </NavLink>
          <NavLink to="/RSE" style={{textDecoration: 'none'}}>
            {({isActive})=>(
               <Button variant={isActive ? activeClassName : unactive} style={{textTransform: 'none',
              borderRadius: '50px',
              marginRight: '10px',
              width: '100px',
              }}>
              RSE</Button> 
            )}    
            </NavLink>
            <Button variant={unactive} style={{textTransform: 'none',
              borderRadius: '50px',
              marginRight: '10px',
              width: '150px',
              }}>
              Mes services</Button> 
              <NavLink to="/product" style={{textDecoration: 'none'}}>
            {({isActive})=>(
               <Button variant={isActive ? activeClassName : unactive} style={{textTransform: 'none',
              borderRadius: '50px',
              marginRight: '10px',
              width: '150px',
              }}>
              Mes produits</Button> 
            )}    
            </NavLink>
         
        </nav>
          <Outlet />
      </section>
    </div>
  )
}
