import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './Routes'
import './sass/Init.scss'

createRoot(document.getElementById('Init')).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
