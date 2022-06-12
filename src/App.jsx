import React from 'react'
import Navigation from './components/navigation/Navigation'
import Header from './components/header/Header'
import About from './components/about/About'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <div><Navigation/></div>
      <div><Header/></div>
      <div><About/></div>
      <div><Footer/></div>
    </>
  )
}

export default App