import React from 'react'
import './header.css'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return (
    <>
     <div className="hero-image mb-1">
      <div className="row justify-content-md-center pb-5 pt-5" >
        <div className="col-md-6"></div>
        <div className="col-md-6 header">
          <div className="header__text">
            <h1>GRUNT</h1>
            <h2 className="pt-1 pb-4"> Geodezyjna Obsługa Inwestycji</h2>
            <a href="#contact" className="btn">Zamów wycenę</a>
          </div>
        </div>
      </div>
    </div>
    
    </>
    
  )
}

export default Header