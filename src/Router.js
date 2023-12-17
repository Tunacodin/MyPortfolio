import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from "./App"
import MoreAbout from './MoreAbout'
export default function Router() {
  return (
      <BrowserRouter>
          <App.js/>
            <MoreAbout/>
      </BrowserRouter>
  )
}
