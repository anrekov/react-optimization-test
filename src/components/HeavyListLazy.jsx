import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { postsMock } from '../constants'
import img1 from '../images/thumb_1.jpg'
import img2 from '../images/cat_original.jpg'
import img3 from '../images/c702.jpg'
import img4 from '../images/scale_1200.webp'
import img5 from '../images/s11729.webp'
import img6 from '../images/skye-united-kingdom-8k-yh.jpg'
import img7 from '../images/images.jpg'
import ReactPlayer from 'react-player'

export const HeavyListLazy = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    ;(async () => {
      // const { data } = await axios.get(
      //   'https://jsonplaceholder.typicode.com/posts'
      // )
      // setPosts(data)

      setPosts(postsMock)
    })()
  }, [])

  const getImageUrl = (key) => {
    switch (key) {
      case 0:
        return img2
      case 1:
        return img3
      case 2:
        return img4
      case 3:
        return img5
      case 4:
        return img6
      case 5:
        return img7

      default:
        return img1
    }
  }

  return (
    <div className='list wrapper'>
      {posts?.map((el, index) => (
        <div key={el.id}>
          <h2>{el.title}</h2>

          <p>{el.body}</p>

          <img alt='cat1' src={getImageUrl(index)} />
        </div>
      ))}
    </div>
  )
}

export default HeavyListLazy
