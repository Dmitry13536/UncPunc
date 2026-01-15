import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './Routes'
import './sass/Init.scss'
import { MusicProvider } from './MusicContext'

createRoot(document.getElementById('Init')).render(
  <StrictMode>
    <MusicProvider>
      <Routes />
    </MusicProvider>
  </StrictMode>,
)
