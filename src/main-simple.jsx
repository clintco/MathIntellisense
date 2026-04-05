import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FluentProvider, webDarkTheme } from '@fluentui/react-components'
import SimpleApp from './SimpleApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FluentProvider theme={webDarkTheme}>
      <SimpleApp />
    </FluentProvider>
  </StrictMode>,
)
