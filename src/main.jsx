import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FluentProvider, webDarkTheme } from '@fluentui/react-components'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FluentProvider theme={webDarkTheme} style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <App />
    </FluentProvider>
  </StrictMode>,
)
