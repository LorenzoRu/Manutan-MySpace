import React from 'react'
import "./sum.css"

export default function Summary() {
    return (
        <div>
            <div className="content">          
            <div className='sumWrapper'>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundImage: 'url(./img/bleu.svg)',
                        backgroundSize: 'cover',
                    }}
                    className="container">
                    </div>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundImage: 'url(./img/orange.svg)',
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#fff',
                        backgroundSize: 'cover',
                    }} className="container">
                        <div style={{
                            marginTop: '2px',
                            marginRight: '10px',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            fontWeight: 'bold',
                        }}>...</div>
                        <div style={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                            marginLeft: '10px',
                        }}>1</div>
                        <div style={{
                            fontSize: '12px',
                            marginLeft: '10px',
                        }}>Commande retardée</div>
                    </div>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundImage: 'url(./img/red.svg)',
                        backgroundSize: 'cover',
                    }}
                    className="container">
                    </div>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundImage: 'url(./img/pink.svg)',
                        backgroundSize: 'cover',
                    }}
                    className="container">
                    </div>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundImage: 'url(./img/green.svg)',
                        backgroundSize: 'cover',
                    }}
                    className="container">
                    </div>
            </div>
                    
            </div>
        </div>
    )
}
