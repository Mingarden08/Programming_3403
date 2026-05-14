import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import CounterApp from './CounterApp.jsx'
import './reset.css'
import HomeApp from './HomeApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeApp />
  </StrictMode>,
)
