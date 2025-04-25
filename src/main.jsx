import { StrictMode } from 'react'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Home from './Components/Home/Home.jsx';
import Root from './Components/Root/Root.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
          
    
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'register',
        element:<Register/>
      }
    ]
  }
])

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(

  <AuthProvider>
  <RouterProvider router={router} />

  </AuthProvider>

);