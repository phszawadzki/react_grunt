import React from 'react'
import './about.css'
import ME from '../../assets/me.png'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const about = () => {
  return (
    <>
    <Container className='about__me about__me__big '>
      <Row>
        <Col>
          <h1>O mnie</h1>
          <p>Jestem inżynierem geodetą z 24 letnim doświadczeniem zawodowym. Posiadam uprawnienia 
            zawodowe do wykonywania samodzielnie funkcji w dziedzinie geodezji i kartografii w dwóch
            zakresach. Pierwszym - geodezyjne pomiary sytuacyjno-wysokościowe, realizacyjne i
              inwentaryzacyjne. Drugim - rozgraniczanie i podziały nieruchomości (gruntów) oraz 
              sporządzanie dokumentacji do celów prawnych. Moje kwalifikacje i długoletnie doświadczenie
              zawodowe stanowią gwarancję, kompleksowego i rzetelnego wykonania świadczonych 
              przeze mnie usług geodezyjnych.
          </p>
        </Col>
        <Col className='text-center'>
          <img src={ ME } alt="Radek Marciniak" className='about__image'/>
        </Col>
      </Row>
    </Container>
    <Container className='about__me about__me__small'>
      <Row>
        <Col xs={8} md={8} className='o_mnie'>
        <h1 className='d-none d-sm-block'>O mnie</h1>
        <h2 className='d-block d-sm-none'>O mnie</h2>
        </Col>
        <Col xs={4} md={4} className='o_mnie2'>
          <img src={ ME } alt="Radek Marciniak" className='about__image'/>
        </Col>
      </Row>
      <p>Jestem inżynierem geodetą z 24 letnim doświadczeniem zawodowym. Posiadam uprawnienia 
        zawodowe do wykonywania samodzielnie funkcji w dziedzinie geodezji i&nbsp;kartografii w
        &nbsp;dwóch zakresach. Pierwszym - geodezyjne pomiary sytuacyjno-wysokościowe, realizacyjne 
         i&nbsp;inwentaryzacyjne. Drugim - rozgraniczanie i&nbsp;podziały nieruchomości (gruntów) 
         oraz sporządzanie dokumentacji do celów prawnych. Moje kwalifikacje i&nbsp;długoletnie 
         doświadczenie zawodowe stanowią gwarancję, kompleksowego i&nbsp;rzetelnego wykonania 
         świadczonych przeze mnie usług geodezyjnych.
          </p>
    </Container>
    </>
  )
}

export default about


