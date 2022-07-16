import React from 'react'
import './services.css'

import Container from 'react-bootstrap/Container';

const services_1 = [
    {
        content: '1. Mapy do celów projektowych',
    },
    {
        content: '2. Tyczenia: budynków, przyłączy, sieci uzbrojenia, granic działek itp.',
    },
    {
        content: '3. Inwentaryzacje powykonawcze',
    },
    {
        content: '4. Pomiary i opracowania GNNS (w tym pomiary satelitarne)',
    },
    {
        content: '5. Wykonywanie map w technice wektorowej',
    },
    {
        content: '6. Aktualizacja mapy zasadniczej',
    }
    
  ]

  const services_2 = [
    {
        content: '1. Podziały nieruchomości',
    },
    {
        content: '2. Mapy do celów prawnych',
    },
    {
        content: '3. Wznowienie/wyznaczenie granic działek',
    },
    {
        content: '4. Rozgraniczenie nieruchomości',
    },
    {
        content: '5. Badanie stanów prawnych nieruchomości',
    },
    {
        content: '6. Inne opracowania do celów prawnych',
    }
    
  ]

const Services = () => {
  return (
    <Container className='services'>
        <h1 className='d-none d-sm-block'>Oferta</h1>
        <h2 className='d-block d-sm-none'>Oferta</h2>
        <div className="services__container">
            <div className="services__item">
                <div className="rectangle"></div>
                <h4>Pomiary sytuacyjno – wysokościowe</h4>
                {
                    services_1.map(({content}) => {
                    return (
                            <p>{content}</p>
                    )
                    })
                }
            </div>
            <div className="services__item">
                <div className="rectangle"></div>
                <h4>Prace geodezyjno – prawne</h4>
                {
                    services_2.map(({content}) => {
                    return (
                            <p>{content}</p>
                    )
                    })
                }
            </div>
        </div>
    </Container>
  )
}

export default Services