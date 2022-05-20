import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import RSE from './routes/RSE';
import General from './routes/general';
import Budget from './routes/budget';
import Porduct from './routes/porduct';
ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/general" element={<General />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/RSE" element={<RSE />} />
          <Route path="/product" element={<Porduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ,
  document.getElementById('root'));

