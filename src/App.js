import React from 'react'
import './App.css'
import {BrouserRouter} from 'react'
import AllRoutes from './routes/AllRoutes'
import Header from './components/hero/header/Header'

function App() {
  return (
    <div>
      <Header/>
      <AllRoutes/>
    </div>
  )
}

export default App