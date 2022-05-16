// import { Link, Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/Home';
// import { Link, Outlet } from 'react-router-dom';


export default function App() {
  return (
    <section>
      <Topbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Home />
        <div style={{
          flex: 2,
          backgroundColor: "#F6F6F6",
          borderRadius: '40px 0px 0px 40px',
          marginTop: '10px',
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <h2 style={{
            width: '60%',
            fontSize: '30px',
            marginTop: '15px',
          }}>Historique de commandes 📦</h2>
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
