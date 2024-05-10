import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { BlogsContextProvider } from './contexts/BlogsContext.jsx'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BlogsContextProvider>
        <App />
      </BlogsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
