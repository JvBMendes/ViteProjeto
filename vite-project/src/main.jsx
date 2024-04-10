import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import { Contato } from './Contato.jsx';
import { Calculadora } from './Calculadora.jsx';


import './index.css'
import { Tecnologias } from './Tecnologias.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/Contato",
    element:  <Contato />,
  },
  {
    path: "/Calculadora",
    element:  <Calculadora />,
  },{
    path: "/Tecnologias",
    element:  <Tecnologias />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
