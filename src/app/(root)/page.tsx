import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'

const Rootpage = () => {
  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Hero />
        </div>
        <div>
          <About />
        </div>
      </div>
    </div>
  )
}

export default Rootpage