import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './calculator.css'
import Calculator from './calculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculator />
  </StrictMode>,
)
