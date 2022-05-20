import React from 'react'
import "./sum.css"

export default function Summary() {
    return (
        <div>
            <div className="content">          
            <div className='sumWrapper'>
                    <div style={{
                        width: '135px',
                        height: '135px',
                        backgroundImage: 'url(./img/bleu.svg)',
                    }}
                    className="container">
                    </div>
                    <div style={{
                        width: '135px',
                        height: '135px',
                        backgroundImage: 'url(./img/orange.svg)',
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#fff',
                    }} className="container">
                        <div style={{
                            marginTop: '2px',
                            marginRight: '10px',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            fontWeight: 'bold',
                        }}>...</div>
                        <div style={{
                            fontSize: '40px',
                            fontWeight: 'bold',
                            marginLeft: '10px',
                        }}>1</div>
                        <div style={{
                            fontSize: '16px',
                            marginLeft: '10px',
                        }}>Commande retardée</div>
                    </div>
                    <div style={{
                        width: '135px',
                        height: '135px',
                        backgroundImage: 'url(./img/red.svg)',
                    }}
                    className="container">
                    </div>
                    <div style={{
                        width: '135px',
                        height: '135px',
                        backgroundImage: 'url(./img/pink.svg)',
                    }}
                    className="container">
                    </div>
                    <div style={{
                        width: '135px',
                        height: '135px',
                        backgroundImage: 'url(./img/green.svg)',
                    }}
                    className="container">
                    </div>
            </div>
                    
            </div>
        </div>
    )
}
