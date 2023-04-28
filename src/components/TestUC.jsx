import React, { memo } from 'react'

export const TestUC = memo(({ cb }) => {
  console.log('Call CB', cb())

  return <div>TestUC</div>
})
