import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Budget from './routes/Budget';
import Finances from './routes/finances';
import RSE from './routes/RSE';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes> 
      <Route path="/" element={<App />}> 
      <Route path="/budget" element={<Budget/>} />
      <Route path="/finances" element={<Finances/>} />
      <Route path="/RSE" element={<RSE/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

