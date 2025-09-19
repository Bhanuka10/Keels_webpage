import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

<<<<<<< Updated upstream
=======
import Footer from './Components/Footer/Footer'

import Navigation from './Components/Navigation/Navigation'
import Poster from './Components/Poster/Poster'


>>>>>>> Stashed changes
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< Updated upstream
      
=======
      <div className="app-container">
        <Navigation />
        <Poster />
        <Footer />
      </div>
>>>>>>> Stashed changes
    </>
  )
}

export default App
