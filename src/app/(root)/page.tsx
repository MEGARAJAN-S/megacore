import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Value from './components/Value'
import { ScrollProgress } from '@/modules/scrollprogress'

const Rootpage = () => {
  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <ScrollProgress />
        </div>
        <div>
          <Hero />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Value />
        </div>
      </div>
    </div>
  )
}

export default Rootpage