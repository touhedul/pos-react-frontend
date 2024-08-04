
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
