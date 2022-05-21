import * as React from 'react';
import Depenses from "../components/charts/Chart";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';

export default function General() {

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Card sx={{
        maxWidth: '95%',
        maxHeight: "40%",
        borderRadius: '18px'
      }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }
          subheader="Évolution des dépenses en k€"
        />
        <CardMedia />
        <CardContent>
          <Depenses />
        </CardContent>
      </Card>

      <div style={{
        marginTop: '2vh',
        marginBottom: '2vh',
        width: '95%',
        display: 'flex',
        justifyContent: 'space-around',
      }}>
        <Card sx={{
          width: '40%',
          borderRadius: '18px'
        }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreHorizIcon />
              </IconButton>
            }
            avatar={
              <Avatar alt='sprout' src='/img/sprout.svg' sx={{ width: 24, height: 24 }} />
            }
            title="Impact carbone en cours"
            sx={{paddingBottom: 0}}
          />
          <CardContent sx={{paddingTop: 0, display: 'flex',alignItems: 'center', flexDirection: 'column'}}>
              <p style={{
                marginTop: 0,
                fontWeight: '200',
                fontSize: '11px',
                width: '50%',
                textAlign: 'center',
              }}>
                basé sur les commandes effectuées, les trajets et les produits achetés
              </p>
              <div style={{
                marginTop: '10px',
                width: '90%',
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
            }}>   
                 <div style={{display:'flex', alignItems: 'center', flexDirection: 'column', width:"50%"}}>
                   <span style={{fontWeight: '200', fontSize: 14}}>Aujourd’hui</span>
                   <span style={{fontWeight: 'bold', fontSize: 14}} >36 kg/CO2</span>
                 </div>
                 <div style={{display:'flex', alignItems: 'center', flexDirection: 'column', width:"50%"}}>
                 <span style={{fontWeight: '200', fontSize: 14}} >Ce mois</span>
                 <span style={{fontWeight: 'bold', fontSize: 14}} >167 kg/CO2</span>
                 </div>
                 <div style={{display:'flex', alignItems: 'center', flexDirection: 'column', width:"50%", marginTop: 20}}>
                   <span style={{fontWeight: '200', fontSize: 14}}>Total</span>
                   <span style={{fontWeight: 'bold', fontSize: 14}} >ede</span>
                 </div>
                 <div style={{display:'flex', alignItems: 'center', flexDirection: 'column', width:"50%", marginTop: 20}}>
                 <span style={{fontWeight: '200', fontSize: 14}} >Ce mois</span>
                 <span style={{fontWeight: 'bold', fontSize: 14}} >ede</span>
                 </div>
              </div>
          </CardContent>
        </Card>
        <Card sx={{
          width: "40%",
          maxHeight: "40%",
          borderRadius: '18px'
        }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreHorizIcon />
              </IconButton>
            }
            subheader="Dépenses"
          />
          <CardMedia />
          <CardContent>
          </CardContent>
        </Card>

      </div>

    </section>
  )
}