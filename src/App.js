import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Social from './components/Social'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Singlepage from './components/Singlepage'

function App() {
  return (
    <div classNae='h-screen'>
      <Navbar />
      <Home />
      <About />
     <Portfolio />
     <Experience />
      <Contact />
      <Social />

    </div>
  )
}

export default App