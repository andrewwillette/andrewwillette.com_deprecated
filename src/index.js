import HomePage from "./components/App.jsx";
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.jsx'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#create-home-page')
)