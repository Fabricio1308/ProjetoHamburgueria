import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './nav';
import ReactDOM from 'react-dom/client'
import BurguerLogin from './BurguerLoginCadastro/BurguerLogin'
import BurguerCadastro from './BurguerLoginCadastro/BurguerCadastro'
import EcomerceTenis from './Ecomerce/EcomerceTenis';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<BurguerCadastro />} />
          <Route path="Login" element={<BurguerLogin />} />
          <Route path="Ecomerce" element={<EcomerceTenis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
