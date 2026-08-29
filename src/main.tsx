import { StrictMode } from 'react'  // Figure out what this is
import { createRoot } from 'react-dom/client' 

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
