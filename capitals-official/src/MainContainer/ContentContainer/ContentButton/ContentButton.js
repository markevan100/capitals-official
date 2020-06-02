import React from 'react'
import './ContentButton.css'

const ContentButton = props => {
  return (
    <div className={props.classes}>
      <a href={props.link}>{props.text}</a>
    </div>
  )
}

export default ContentButton;
