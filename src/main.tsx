import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { ModeToggle } from './components/mode-toggle.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
    <div className='fixed bottom-10 right-5'>
    <ModeToggle />
    </div>
    </ThemeProvider>
  </React.StrictMode>,
)
