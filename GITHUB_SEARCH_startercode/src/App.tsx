import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Search from './components/Search'
import Homepage from './components/Homepage'
function App (): any {
  return (
      <div className='App'>
        <Routes>
        <Route path='/' element={<Homepage />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </div>
  )
}
export default App
