import { MoreHoriz } from '@mui/icons-material'
import { Card, CardContent, CardHeader, IconButton } from '@mui/material'
import React from 'react'
import Zack from '../components/Zack'

export default function Services() {
  return (
    <section style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }}>
         <Card sx={{
      width: '88%',
      height: 500,
      borderRadius: '18px'
    }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreHoriz />
          </IconButton>
          
        }
        title='Vos services'
        sx={{fontFamily: 'Manrope'}}
      />
      <CardContent sx={{padding: 0}} >
          <div style={{
              backgroundColor: '#F8F0E3',
              width: '100%',
              
                display: 'flex',
                justifyContent: 'space-around',
          }}>
            <Zack />
          </div>
          <img src='/img/location.svg' alt='loc'  style={{
                marginTop: 10,
                width: '100%',
          }}/>
      </CardContent>
    </Card>
    </section>
  )
}
