import { MoreHoriz } from "@mui/icons-material";
import { Button, ButtonGroup, Card, CardContent, CardHeader, IconButton } from "@mui/material";

export default function Budget() {
    return (
        <section style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        
        }}>
               <Card sx={{
          width: "40%",
          height: 450,
          borderRadius: '18px' 
        }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreHoriz />
              </IconButton>
            }
            title="Budget disponible"
            
          />
          <CardContent  sx={{ paddingTop: 0, display: 'flex', flexDirection: 'column' }} >
            <div >
              <ButtonGroup variant="string" aria-label="text button group" sx={{display: 'flex', flexWrap: 'wrap', }} >
                <Button style={{ textTransform: 'none', fontFamily: 'Manrope', fontSize: 12 }} className='select active' >Mois</Button>
                <Button style={{ textTransform: 'none', fontFamily: 'Manrope', fontSize: 12  }} className='select'>Année</Button>
              </ButtonGroup></div>
              <span style={{ fontWeight: 'bold', fontSize: 24, color: '#0085FF' }} >10 374,87€</span>
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
                <span style={{ fontWeight: '200', fontSize: 14 }}>Total</span>
                <span style={{ fontWeight: 'bold', fontSize: 24, width: '100%' }}>78 942,31€</span>
              </div>
          </CardContent>
        </Card>
                <Card sx={{
                width: "40%",
                height: 450,
                borderRadius: '18px',
                marginBottom: '2vh',
            }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreHoriz />
                        </IconButton>
                    }
                    title='Poste de dépenses'
                    subheader="Depense total :  9 248 €"
                    sx={{ fontFamily: 'Manrope' }}
                />
                <CardContent sx={{display: 'flex',}} >
                    <img src="/img/poleDepenses.svg" alt="dépenses" style={{width: "100%"}}/>
                  
                </CardContent>
            </Card>
        </section>
    )
}
