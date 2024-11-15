import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { AlertProvider } from 'contexts/AlertContext'

import Routes from './routes'
import AlertPopup from 'components/AlertPopup'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AlertProvider>
      <BrowserRouter>
        <Routes />
        <AlertPopup />
      </BrowserRouter>
    </AlertProvider>
  </StrictMode>,
)
