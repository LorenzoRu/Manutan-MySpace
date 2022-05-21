import React from 'react'
import "./topbar.css"



export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <img src="/img/logo.svg" alt="logo"  className='logo'/>
                <div className='searchWrapper'>
                  <input type="text" 
                placeholder='Recherchez parmi nos 260 000 références, conseils, services...'
                style={{
                    width: '632px',
                    height: '32px',
                    border: 'solid 1px #BDBDBD',
                    paddingLeft: '20px',
                    borderRadius: '10px 0px 0px 10px'
                }} />
                <button type={'submit'} 
                style={{
                    width: '50px',
                    height: '36px',
                    border: 'none',
                    backgroundColor: '#EA612D',
                    cursor: 'pointer',
                    marginLeft: '-2px',
                    borderRadius: '0px 10px 10px 0px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} >
                    <img 
                    src="/img/lens.svg" 
                    alt="search"
                    style={{
                        marginTop: '8px',
                    }} />
                </button>
            </div>  
            <div style={{display: 'flex',justifyContent: 'center'} }>
                <img src="/img/profile.svg" alt="profil" />
                <div style={{display:'flex', flexDirection: 'column'}} >
                    <span style={{fontSize: "12px", fontWeight: "bold"}}>CARPENTIER</span>
                    <span  style={{fontSize: "12px"}}>Lou</span>
                </div>
            </div>
                </div>
                
        </div>
    )
}
