import { Link, Outlet } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';


export default function App() {
  return (
    <section>
      <Topbar />
      <h1>Hello World</h1>
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

    </section>
  )
}
