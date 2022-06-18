import React from 'react'
import './faq.css'

const faq_1 = [
    {
        title: 'Na początku',
        content: 'by wyznaczyć granice nieruchomości (działki) lub wykonać mapę do celów projektowych.',
    },
    {
        title: 'Kolejny etap',
        content: 'to wyznaczenie projektowanego obiektu - budynku, przyłączy, sieci, zjazdów itp. ',
    },
    {
        title: 'Koniec inwestycji',
        content: ' to inwentaryzacja powykonawcza wykonanych obiektów budowlanych, której rezultatem końcowym jest mapa powykonawcza potrzebna do uzyskania decyzji na użytkowanie z Nadzoru Budowlanego lub innego organu.',
    }
  ]

const faq_2 = [
  {
      content: 'Przed zakupem, by wyznaczyć granice nieruchomości, którą zamierzasz nabyć.',
  },
  {
      content: 'Gdy masz wątpliwości co do przebiegu granic nieruchomości.',
  },
  {
      content: 'Jeśli chcesz podzielić nieruchomość.',
  },
  {
    content: 'By zbadać stan prawny nieruchomości.',
  },
  {
    content: 'Gdy potrzebujesz inne opracowanie prawne.',
  }
]

const faq = () => {
  return (
    <>
        <div className='faq__section'>
            <h3 className='faq__title'>Jeżeli rozpoczynasz budowę lub jesteś w jej trakcie, to mogę być pomocny:</h3>
            <div className="faq__container">
            {
              faq_1.map(({title, content}) => {
                return (
                    <div className='faq__item'>
                      <div className="rectangle"></div>
                      <h4>{title}</h4>
                      <p>{content}</p>
                    </div>
                )
              })
            }
            </div>
        </div>

        <div className='faq__section faq2__section'>
          <h3 className='faq__title'>Jeżeli zamierzasz kupić lub sprzedać nieruchomość, to mogę być pomocny:</h3>
          <div className="faq__container">
          {
            faq_2.map(({content}) => {
              return (
                  <div className='faq__item'>
                    <div className="rectangle rectangle__white"></div>
                    <p>{content}</p>
                  </div>
              )
            })
          }
          </div>
        </div>
  </>
  )
}

export default faq