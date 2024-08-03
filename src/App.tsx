import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './config/routes'

function App() {

  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  )
}

export default App
