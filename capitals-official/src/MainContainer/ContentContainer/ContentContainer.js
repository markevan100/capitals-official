import React from 'react'
import ContentButton from './ContentButton/ContentButton'
import Subtitle from './Subtitle/Subtitle'
import Title from './Title/Title'
import './ContentContainer.css'

const ContentContainer = () => {
  return (
    <div className="content-container__container">
      <Title />
      <Subtitle />
      <ContentButton classes="content-button__button content-button__white-button" text='Login' link='/login' />
      <ContentButton classes="content-button__button content-button__blue-button" text='New Game' link='/new-game' />
    </div>
  )
}

export default ContentContainer;
