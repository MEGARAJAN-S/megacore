import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

const Rootpage = () => {
  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div className=''>
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default Rootpage