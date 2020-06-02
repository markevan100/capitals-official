import React from 'react'
import Logo from './Logo/Logo'
import NavButtons from './NavButtons/NavButtons'
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav__container">
      <Logo />
      <NavButtons />
    </div>
  )
}

export default Nav;
