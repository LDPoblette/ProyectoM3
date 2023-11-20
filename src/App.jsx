import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import {AuthContextProvider} from './contexts/AuthContext'
import Home from './pages/Home/Home'
import Users from './pages/Users/Users'
import Registration from './pages/Registration/Registration'
import Login from './pages/Login/Login'
import Inventory from './pages/Inventory/Inventory'
import RequiresLogin from './pages/Guards/RequiresLogin'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/home",
        element: <Home/>
      }, {
        path: "/inventory",
        element: <Inventory/>
      }, {
        path: "/login",
        element: <Login />
      }, {
        path: "/registration",
        element: <RequiresLogin>  <Registration/> </RequiresLogin>
      }, {
        path: "/users",
        element: <RequiresLogin>  <Users/> </RequiresLogin>
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

function RootLayout (){
  return(
    <AuthContextProvider>
      <Header/>
      <Outlet/>
    </AuthContextProvider>
  )
}

export default App
