import { ExpandMore, ExpandLess } from '@mui/icons-material';
import React from 'react';


export default function MyCollaps({
    ref = 'Référence  produit : A863542',
    product = 'Ramette Adagio 250 feuilles - 160g',
    price = 'Prix : 7,45 € / unité',
    eco = '2',
    budget = '1',
    alt1 = '/img/alt1.svg',
    alt2 = '/img/alt2.svg',
    alt3 = '/img/alt3.svg',
}) {
    const [open, setOpen] = React.useState("none");
  return (
    <section>
       <div style={{display: 'flex', justifyContent:'space-around', alignItems: 'center',marginTop: 10}}>
            <img src="/img/feuilles.svg" alt="" />
        <div style={{display: 'flex',flexDirection: 'column', alignItems: 'flex-start'}}>
            <span style={{color: "#3D424A", fontSize: 16, fontWeight: 700}}>{ref}</span>
            <span style={{color: "#3D424A", fontSize: 14, fontWeight: 600}}>{product}</span>
            <span style={{color: "#3D424A", fontSize: 14, fontWeight: 600}}>{price}</span>
        </div>
        <div style={{display: 'flex',flexDirection: 'column', alignItems: 'flex-start'}}>
            <span style={{color: "#3D424A", fontSize: 12}}>{eco} alternative(s)</span>
            <span style={{color: "#3D424A", fontSize: 12}}>{budget} alternative(s)</span>
        </div>
        <ExpandMore onClick={() => setOpen(open === "none" ? "flex" : "none" )} />
    </div>
    <div style={{display: open, marginTop: 10, justifyContent: 'space-around'}}>
        <img src={alt1} alt="alternativr" />
        <img src={alt2} alt="alternativr" />
        <img src={alt3} alt="alternativr" />
    </div> 
    </section>
    
    
  )
}
