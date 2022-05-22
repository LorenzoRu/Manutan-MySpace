import { Button, Card, CardContent, CardHeader, IconButton } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import PieC from "../components/charts/Pie";


export default function RSE() {
    return (
        <section style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        }}>
            <Card sx={{
                width: "40%",
                maxHeight: "40%",
                borderRadius: '18px',
                marginBottom: '2vh',
            }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreHoriz />
                        </IconButton>
                    }
                    subheader="Bilan Carbone 2022"
                    sx={{ fontFamily: 'Manrope' }}
                />
                <CardContent sx={{ paddingTop: 0, display: 'flex', flexDirection: 'column' }} >

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 15 }} >
                        <span style={{ fontSize: 24, color: '#3D424A', fontWeight: '600' }}>635</span>
                        <span style={{ fontSize: 13, color: '#3D424A' }}>tonnes de CO2</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                        <span style={{ fontSize: 12, color: '#3D424A' }}>Empreinte individuelle moyenne</span>
                        <span style={{ fontSize: 16, color: '#B09FFF', fontWeight: '600' }}>33 tCO2E / collaborateurs</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                        <span style={{ fontSize: 12, color: '#3D424A' }}>Intensité de carbonne</span>
                        <span style={{ fontSize: 16, color: '#B09FFF', fontWeight: '600' }}>1.6 tCO2E / k€ de C.A.</span>
                    </div>
                </CardContent>
            </Card>
            <Card sx={{
                width: "40%",
                maxHeight: "40%",
                borderRadius: '18px',
                marginBottom: '2vh',
            }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreHoriz />
                        </IconButton>
                    }
                    subheader="Votre commande  FZ-435
                    a généré :"
                    sx={{ fontFamily: 'Manrope' }}
                />
                <CardContent sx={{ paddingTop: 0, display: 'flex', flexDirection: 'column' }} >

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 15 }} >
                        <span style={{ fontSize: 34, color: '#3D424A', fontWeight: '700' }}>2t</span>
                        <span style={{ fontSize: 26, color: '#3D424A' }}>de carbone</span>
                    </div>
                    <Button 
                    style={{fontSize: 10,color: '#0085FF'}}
                    variant="outlined"
                    sx={{borderRadius: 25,}}>
                    Comment réduire le taux de carbone de mes commandes ? </Button>
                </CardContent>
            </Card>
            <Card sx={{
        maxWidth: '100%',
        maxHeight: "40%",
        borderRadius: '18px'
      }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreHoriz/>
            </IconButton>
          }
          sx={{fontFamily: 'Manrope'}}
          subheader="Bilan carbone par pôles d’activités"
        />
        <CardContent>
         <div >
            <PieC />
         </div>
        </CardContent>
      </Card>
           
           
        </section>
    )
}