// Supports weights 100-900
import '@fontsource-variable/grandstander';
import "@fontsource/comfortaa"; // Defaults to weight 400
import "@fontsource/comfortaa/400.css"; // Specify weight
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>
)
