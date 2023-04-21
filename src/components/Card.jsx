import React, { memo } from 'react'

export const Card = ({ children }) => (
  <div className='card'>
    {Date.now()} Card-{children}
  </div>
)

// with memo
export const Card2 = memo(({ children }) => (
  <div className='card'>
    {Date.now()} Card2-{children}
  </div>
))
