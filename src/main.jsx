import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './cartContext.jsx'
import { AuthProvider } from './authContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
