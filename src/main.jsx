import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import './logos.css'
import { ProveedorIdioma } from './components/IdiomaContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProveedorIdioma>
      <App />
    </ProveedorIdioma>
  </React.StrictMode>,
)
