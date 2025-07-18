import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  //checks syntax errors <strictmode> only available in dev env, code runs twice for checking syntax
  //then run finally 
  //App is component
  <StrictMode>
    <Provider store= {store}>
    <App />
    </Provider>
  </StrictMode>,
)
