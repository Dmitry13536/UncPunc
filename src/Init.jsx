import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './Routes'
import './sass/Init.scss'
import { MusicProvider } from './context/MusicContext'
import { MonsterProvider } from './context/MonsterContext'
import AppErrorBoundary from './components/fallback/AppErrorBoundary'
import { UpgradesProvider } from './context/UpgradeContext'

createRoot(document.getElementById('Init')).render(
  <StrictMode>
    <AppErrorBoundary>
      <UpgradesProvider>
        <MonsterProvider>
          <MusicProvider>
            <Routes />
          </MusicProvider>
        </MonsterProvider>
      </UpgradesProvider>
    </AppErrorBoundary>
  </StrictMode>,
)
