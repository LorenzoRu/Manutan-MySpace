import React from 'react'
import MyCollaps from './Collaps'

const b = [
    {
        r: 'Référence  produit : A863542',
        product: 'Ramette Adagio 250 feuilles - 160g',
        price: 'Prix : 7,45 € / unité',
        eco: '2',
        budget: '1',
        alt1: '/img/alt1.svg',
        alt2: '/img/alt2.svg',
        alt3: '/img/alt3.svg',
        prod: '/img/feuilles.svg',
    },
    {
        r: 'Référence  produit : A745826',
        product: 'Bureau droit pieds ronds 120 cm',
        price: 'Prix : 299,00 € € / unité',
        eco: '2',
        budget: '1',
        alt1: '/img/alt1.svg',
        alt2: '/img/alt2.svg',
        alt3: '/img/alt3.svg',
        prod: '/img/table.svg',
    },
    {
        r: 'Référence  produit : A793935',
        product: 'Pistolet de dépose manuel PLX 50 - Loctite',
        price: 'Prix : 88,25 € / unité',
        eco: '2',
        budget: '1',
        alt1: '/img/alt1.svg',
        alt2: '/img/alt2.svg',
        alt3: '/img/alt3.svg',
        prod: '/img/pistoletDepose.svg',
    },
    {
        r: 'Référence  produit : A759356',
        product: 'Siège de bureau Trix',
        price: 'Prix : 212,10 € / unité',
        eco: '2',
        budget: '1',
        alt1: '/img/alt1.svg',
        alt2: '/img/alt2.svg',
        alt3: '/img/alt3.svg',
        prod: '/img/siege.svg',
    },
]

export default function Pliste() {
    return (
        <div>
            {b.map((item) => (<MyCollaps
                r={item.r}
                product={item.product}
                price={item.price}
                prod={item.prod}
                eco={item.eco}
                budget={item.budget}
                alt1={item.alt1}
                alt2={item.alt2}
                alt3={item.alt3}
            />))}
        </div>
    )
}
