import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import './styles/main.scss'
import App from './App.jsx'
=======
import "./styles/main.scss"
import App from './App'
>>>>>>> feature/navbar

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
