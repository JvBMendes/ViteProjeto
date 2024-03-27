import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import { Contato } from './Contato.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/Contato",
    element:  <Contato />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
