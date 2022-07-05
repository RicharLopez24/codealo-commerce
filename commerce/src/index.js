import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productos from './Views/Productos';
import Registro from './Views/Registro';
import Login from './Views/Login';
import Home from './Views/Home';
import Carrito from './Views/Carrito';
import CreateCount from './Views/CreateCount';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/productos' element={<Productos />}/>
      <Route path='/registro' element={<Registro />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/carrito' element={<Carrito />}/>
      <Route path='/cuenta' element={<CreateCount />}/>

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

