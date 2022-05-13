// import { Link, Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/Home';


export default function App() {
  return (
    <section>
      <Topbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        {/* <div style={{ flex: 4, backgroundColor: "darkcyan" }}>
          <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/budget">Budget</Link> |{" "}
          <Link to="/finances">Finances</Link> |{" "}
          <Link to="/RSE">RSE</Link>
        </nav>
          <Outlet />
          
        </div>*/}
       <Home /> 
      </div> 
    </section>
  )
}
