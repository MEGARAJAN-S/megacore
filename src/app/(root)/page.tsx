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
        <div className='pt-16'>
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default Rootpage