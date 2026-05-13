import { useState } from 'react'
import Header from './pages/Header'
import Main from './components/Hero/main'
import Card from './components/Card'
import TypoGraph from './components/typoGraph'
import Sponsor from './components/Sponsor'

function App() {
  
  return (
    <>
      <Main />
      <Card />
      <TypoGraph />
      <Sponsor />
    </>
  )
}

export default App
