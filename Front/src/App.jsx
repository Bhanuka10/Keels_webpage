import React, { useState } from 'react'
import './App.css'

import Footer from './Components/Footer/Footer'
import Navigation from './Components/Navigation/Navigation'
import Poster from './Components/Poster/Poster'


function App() {
  const [count, setCount] = useState(0)



  return (

    <>
      <div className="app-container">
        <Navigation />
        <Poster />
        <Footer />
      </div>
    </>
  )
}

export default App
