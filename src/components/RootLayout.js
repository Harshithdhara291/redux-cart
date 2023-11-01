import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarPanel from './Navbar'
const RootLayout = () => {
  return (
    <>
    <NavbarPanel/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default RootLayout