import React from 'react'
import Navigation from './components/navigation/Navigation'
import Header from './components/header/Header'
import FAQ from './components/FAQ/FAQ'
import About from './components/about/About'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import Gallery from './components/gallery/Gallery'

const App = () => {
  return (
    <>
      <div><Navigation/></div>
      <div><Header/></div>
      <div><FAQ/></div>
      <div><About/></div>
      <div><Services/></div>
      <div><Footer/></div>
      <div><Gallery/></div>
    </>
  )
}

export default App