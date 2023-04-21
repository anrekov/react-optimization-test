import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

export const Layout = () => (
  <div>
    <nav>
      <NavLink to='main'>Main</NavLink>
      <NavLink to='second'>Second</NavLink>
      <NavLink to='third'>Third</NavLink>
      <NavLink to='lh'>Lighthouse</NavLink>
    </nav>

    <Outlet />
  </div>
)
