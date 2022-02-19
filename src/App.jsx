
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Launch from './routes/Launch'
import useState from 'react-hook-use-state'

function App() {
 
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Launch/*' element={<Launch />} />
      </Routes>
    
    </div>
  )
}

export default App;