import { MoreHoriz } from '@mui/icons-material'
import { Card, CardContent, CardHeader, IconButton } from '@mui/material'
import React from 'react'
import MyCollaps from '../components/Collaps'

export default function Porduct() {
  return (
    <section style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
  }}>
    <Card sx={{
      width: '90%',
      borderRadius: '18px'
    }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreHoriz />
          </IconButton>
          
        }
        title='Nos recommandations de produits'
        subheader='Nous vous proposons des alternatives de produits que vous avez déjà commandés selon vos critères :'
        sx={{fontFamily: 'Manrope'}}
      />
      <CardContent >
        <div style={{
          display: 'flex',
         alignItems: 'center',
         
        }}> 
        <span>Budgétaire</span>
        <img src="/img/euro.svg" alt="euro" style={{marginLeft: 10}}/>
        </div>
        <br />
        <div style={{
          display: 'flex',
         alignItems: 'center',
        }}> 
        <span>Écologique</span>
        <img src="/img/sprout.svg" alt="sprout" style={{marginLeft: 10}} />
        </div>
        <MyCollaps/>
      </CardContent>
    </Card>
    </section>
  )
}
