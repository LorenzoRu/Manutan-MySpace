import { Button } from '@mui/material'
import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'
import Summary from '../components/summary/Summary'

export default function Home() {
  let activeStyle = {
    color: 'red'
  };

  let activeClassName = 'contained';
  let unactive = 'outlined';
  return (
    <div style={{
        flex: 4,
        padding: '25px 30px',
    }}>
      <p style={{
        fontSize: '18px',
        color: '#369FFF',
      }}>Bonjour <span style={{
        fontWeight: 'bold',
      }}>Lou</span>, Welcome back !</p>
      <h2 style={{
        marginTop: '16px',
        fontSize: '30px',
    }}>
      Suivi de commande</h2>
      <Summary />
      <section className='widgetWrapper'
      style={{
        marginTop: '30px',
        width: '100%',
        height: '67%',
        backgroundColor: '#F3F4F8',
        borderRadius: '18px 18px 0 0',
        padding: ' 10px 0 0 25px',
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
