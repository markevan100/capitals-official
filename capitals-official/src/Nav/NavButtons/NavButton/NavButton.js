import React from 'react'
import './NavButton.css'

const NavButton = props => {
  return (
    <a href={props.link} className={props.classes}>{props.text}</a>
  )
}

export default NavButton;
