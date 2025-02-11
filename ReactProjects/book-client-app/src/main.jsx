import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'
import App from './App.jsx'
import { AuthorContext } from './authors/contexts/AuthorContext'
import { StatusContext } from './commons/contexts/status-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StatusContext>
      <AuthorContext>
        <App />
      </AuthorContext>
    </StatusContext>
  </StrictMode>,
)
