import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';



export default function DCard({
  title = 'NB-799',
  subheader = 'Acheté : Ven 04/05/22',
  img = "/img/progressErorr.svg" ,
  color ="orange",
  date= "(Jeu 12/05/22)",
  error= "Problème de transporteur",
  estime= "Estimation date de livraison : Lun 20/05/22"}) {

  return (
    <Card sx={{
      width: '100%',
      borderRadius: '18px'
    }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title={title}
        subheader={subheader}
        sx={{fontFamily: 'Manrope'}}
      />
      <CardMedia
        image={img}
        title="Paella dish"
      />
      <CardContent>
        <img src={img} alt="status commande" style={{ width: '100%', }} />
        <div style={{display: 'flex', justifyContent:"center", alignItems: 'center'}}>
          <span className={color} style={{textTransform: 'uppercase', fontFamily: 'Manrope', fontSize: 14}}>retardée</span>
          <span style={{fontFamily: 'Manrope', marginLeft: 10, fontSize: 9}}>{date}</span>
        </div>
        <div style={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column'}}>
          <span style={{ fontFamily: 'Manrope', fontSize: 9}}>{error}</span>
          <span style={{fontFamily: 'Manrope', marginTop: 10, fontSize: 9}}>{estime}</span>
        </div>
      </CardContent>
    </Card>
  );
}
