import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';



export default function DCard() {

  return (
    <Card sx={{ maxWidth: 345,
                maxHeight: "40%",
                borderRadius: '18px'}}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
      />
      <CardMedia/>
      <CardContent>
      </CardContent>
    </Card>
  );
}
