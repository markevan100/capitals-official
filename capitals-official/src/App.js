import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav/Nav'
import MainContainer from './MainContainer/MainContainer'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <MainContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
