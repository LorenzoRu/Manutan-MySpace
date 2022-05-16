// import { Link, Outlet } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/Home';
import "./App.css";


export default function App() {
  return (
    <section>
      <Topbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Home />
        <div style={{
          flex: 2,
          borderRadius: '40px 0px 0px 40px',
          marginTop: '10px',
          padding: '10px',
          boxSizing: 'content-box',
          backgroundColor: '#fff',
          backgroundImage: `url("/img/manutan.svg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right top',
        }} >
          <div style={{
            marginTop: '15px',
            display: 'flex',
            
          }}> 
          <img src='/img/expand-more.svg' /> 
          <h2 style={{
            fontSize: '30px',
          }}>Historique de commandes 📦</h2>
          </div>
          <div style={{
            display: 'flex',
            marginTop: '30px'
          }}>
            
            <input 
            type="text"
             placeholder="Search"
             style={{
              position: 'relative',
              borderRadius: '20px',
              border: '1px solid #E0E0E0',
              paddingLeft: '35px',
             }} />
             <img 
            src='/img/search1.svg'
            style={{
              position: 'absolute',
              left: '73%',
              top: '26%',
            }} 
            alt="search" />
            <div className='filter'>
              <ButtonGroup variant="string" aria-label="text button group" >
                <Button style={{textTransform: 'none'}} className='select' >Day</Button>
                <Button style={{textTransform: 'none'}} className='select' >Week</Button>
                <Button style={{textTransform: 'none'}} className='select active'>Month</Button>
              </ButtonGroup></div>
          </div>
          {/* <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/budget">Budget</Link> |{" "}
          <Link to="/finances">Finances</Link> |{" "}
          <Link to="/RSE">RSE</Link>
        </nav>
          <Outlet /> */}

        </div>

      </div>
    </section>
  )
}
