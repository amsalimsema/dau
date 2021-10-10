import React from 'react'
import Footer from '../components/Footer'
import Founders from '../components/Founders'

import Intro from '../components/Intro'
import Work from '../components/Work'

export default function Home() {
  return (
    <>
      <Intro />
      <div id="about">
        <Founders />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  )
}
