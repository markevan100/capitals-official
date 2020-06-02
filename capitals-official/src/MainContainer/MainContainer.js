import React from 'react';
import { Route } from 'react-router-dom';
import ContentContainer from './ContentContainer/ContentContainer'
import './MainContainer.css'

const MainContainer = () => {
  return (
    <div className="main-container__container">
      <Route path="/" exact component={ContentContainer} />
      <Route path="/login" exact render={() => <h1>Login Page</h1>} />
      <Route path="/sign-up" exact render={() => <h1>Sign Up Page</h1>} />
      <Route path="/new-game" exact render={() => <h1>New Game Page</h1>} />
    </div>
  )
}

export default MainContainer;
