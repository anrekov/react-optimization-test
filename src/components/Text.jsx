import React, { memo } from 'react'

export const Text = () => {
  return <p>Просто текст, который не при делах, но внутри компонента</p>
}

export const Text2 = memo(() => {
  return <p>Просто текст, который не при делах, но внутри компонента с мемо</p>
})
