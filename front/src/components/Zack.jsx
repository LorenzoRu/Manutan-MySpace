import { ExpandMore } from '@mui/icons-material'
import React from 'react'

export default function Zack() {
    const [open, setOpen] = React.useState("none");
    return (
        <div >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <img src="/img/logozack.svg" alt="zack"
                    style={{
                        width: '35%',
                    }} />
                <p >Avec le service ZACK vous avez permis a <p style={{
                    fontWeight: 'bold',
                }}>125</p> produits d’avoir une seconde vie</p>
                <ExpandMore onClick={() => setOpen(open === "none" ? "flex" : "none")} style={{ cursor: 'pointer' }} />
            </div>
            <div style={{ display: open, marginTop: 10, justifyContent: 'space-around', alignItems: 'center' }}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src="img/souris.svg" alt="alternativr" style={{ width: '50%', }} />
                    <span style={{ 
                        fontSize: 12,
                        fontWeight: 'bold',
                        }}>Vous avez fait don de 34 souris</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src="img/chaise.svg" alt="alternativr" style={{ width: '50%', }} />
                    <span style={{ 
                        fontSize: 12,
                        fontWeight: 'bold',
                        }} >Vous avez fait don de 86 chaises</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src="img/table2.svg" alt="alternativr" style={{ width: '50%', }} />
                    <span style={{ 
                        fontSize: 12,
                        fontWeight: 'bold',
                        }}>Vous avez fait don de 14 tables</span>
                </div>
            </div>
        </div>

    )
}
