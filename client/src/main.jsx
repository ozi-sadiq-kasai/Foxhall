import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './Global.js'
import Theme from './components/Theme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Theme>
    <GlobalStyles />
    <App />
  </Theme>
  </StrictMode>,
)
