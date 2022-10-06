import React from 'react'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppProvider from './context'
import Routes from './routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AppProvider>
        <Routes />
      </AppProvider>
    </React.StrictMode>
  </BrowserRouter>
)
