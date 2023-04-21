import React from 'react'
import img1 from '../images/thumb_1.jpg'
import { Helmet } from 'react-helmet'

export const LightHouseTest = () => (
  <div className='wrapper'>
    <Helmet>
      <meta name='description' content='Test app - lighthouse test page' />
      <meta
        name='keywords'
        content='test app react optimization seo and accessibility'
      />
      <title>Lighthouse test page</title>
    </Helmet>

    <h1>Main</h1>

    <div>
      <h3>Outer</h3>

      <div>
        {[1, 2, 3, 4, 5].map((el) => (
          <h2 key={el}>inner - {el}</h2>
        ))}

        <img
          // alt='Cute kitty'
          src={img1}
        />
      </div>
    </div>
  </div>
)
