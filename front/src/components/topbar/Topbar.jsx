import React from 'react'
import "./topbar.css"



export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <input type="text" 
                placeholder='Recherchez parmi nos 260 000 références, conseils, services...'
                style={{
                    width: '632px',
                    height: '32px',
                    border: 'solid 1px #BDBDBD',
                    paddingLeft: '20px',
                    borderRadius: '10px 0px 0px 0px'
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
        </div>
    )
}
