import React from 'react'
import DCard from './card'
 const data =[
     {
    title: 'NB-799',
    subheader: 'Acheté : Ven 04/05/22',
    img: "/img/progressErorr.svg" ,
    color:"orange",
    dat: "(Jeu 12/05/22)",
    status: "Retardée",
    erro: "Problème de transporteur",
    estim: "Estimation date de livraison : Lun 20/05/22"
 },
     {
    title: 'LL-420',
    subheader: 'Acheté : Lun 23/04/22 ',
    img: "/img/inprogress.svg" ,
    color:"blue",
    dat: "",
    status: "En Transit",
    erro: "",
    estim: "Estimation date de livraison : Lun 20/05/22"
 },
     {
    title: 'QS-900',
    subheader: 'Acheté : Ven 04/05/22',
    img: "/img/inprogress.svg" ,
    color:"blue",
    dat: "",
    status: "En Transit",
    erro: " ",
    estim: "Estimation date de livraison : Lun 20/05/22"
 },
     {
    title: 'FZ-435',
    subheader: 'Acheté : Lun 12/04/22',
    img: "/img/deliver.svg" ,
    color:"green",
    dat: "",
    erro: "",
    estim: " ",
    status: "Livrée"
 },
 ]

export default function CommandListe() {
  return (
    <div style={{height: '100%',}}> {data.map((items) => (<DCard
        title={items.title}  
        subheader={items.subheader}
        img={items.img}
        color={items.color}
        dat={items.dat}
        erro={items.erro}
        estim={items.estim}
        status={items.status}
        />))}</div>
  )
}
