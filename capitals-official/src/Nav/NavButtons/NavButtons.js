import React from 'react'
import NavButton from './NavButton/NavButton'
import './NavButtons.css'

const Nav = () => {
  return (
    <div className="nav-buttons__container">
      <NavButton classes="nav-button__button nav-button__white-button" text='Login' link="/login" />
      <NavButton classes="nav-button__button nav-button__blue-button" text='Sign Up' link="/sign-up" />
    </div>
  )
}

export default Nav;
