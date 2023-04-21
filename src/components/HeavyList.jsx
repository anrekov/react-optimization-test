import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const HeavyList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      setPosts(data)
    })()
  }, [])

  return (
    <div className='list wrapper'>
      {posts?.map((el) => (
        <div key={el.id}>
          <h2>{el.title}</h2>

          <p>{el.body}</p>
        </div>
      ))}
    </div>
  )
}
