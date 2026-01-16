import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './Routes'
import './sass/Init.scss'
import { MusicProvider } from './context/MusicContext'
import { MonsterProvider } from './context/MonsterContext'

createRoot(document.getElementById('Init')).render(
  <StrictMode>
    <MonsterProvider>
    <MusicProvider>
      <Routes />
    </MusicProvider>
    </MonsterProvider>
  </StrictMode>,
)
