import React from 'react'
import { Route, Routes } from 'react-router'
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen'

function App() {

  return (

    <Routes>
     {/*  <Route path='/login' element={} /> */}
      <Route path='/register' element={<RegisterScreen/>} />
    </Routes>

  )
}

export default App
