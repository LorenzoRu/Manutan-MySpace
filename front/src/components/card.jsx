import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';



export default function DCard({
  title = ' ',
  subheader = ' ',
  img = " " ,
  color =" ",
  dat= "  ",
  erro= " ",
  estim= " ",
  status = " "}) {

  return (
    <Card sx={{
      width: '100%',
      borderRadius: '18px',
      marginTop: 2,
    }}
   className={color}
    >
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
          <span className={color} style={{textTransform: 'uppercase', fontFamily: 'Manrope', fontSize: 14}}>{status}</span>
          <span style={{fontFamily: 'Manrope', marginLeft: 10, fontSize: 9}}>{dat}</span>
        </div>
        <div style={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column'}}>
          <span style={{ fontFamily: 'Manrope', fontSize: 9}}>{erro}</span>
          <span style={{fontFamily: 'Manrope', marginTop: 10, fontSize: 9}}>{estim}</span>
        </div>
      </CardContent>
    </Card>
  );
}
