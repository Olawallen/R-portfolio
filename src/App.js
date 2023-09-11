import React from 'react'
import Navbar from './components/nav/Navbar'
import Main from './components/main/Main'
import "./App.css"
import About from './components/about/About'
import Services from './components/services/Services'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Services/>
    </div>
  )
}

export default App