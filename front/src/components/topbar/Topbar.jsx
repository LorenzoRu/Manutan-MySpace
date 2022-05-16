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
                    paddingLeft: '20px'
                }} />
                <button type={'submit'} 
                style={{
                    width: '50px',
                    height: '36px',
                    border: 'none',
                    backgroundColor: '#EA612D',
                    cursor: 'pointer',
                    marginLeft: '-1px',
                }} >
                    <img src="/Iconly/broken/search.svg" alt="search" />
                </button>
            </div>
        </div>
    )
}
