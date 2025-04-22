import React, { useEffect, useState } from 'react'

const ImageSlider = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2024/01/17/12/06/car-8514314_640.png",
    "https://webneel.com/wallpaper/sites/default/files/images/07-2013/6%20lamborghini%20car%20wallpaper.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ltsP1J7nQaEADpBejZf3k6yMfl1OoXwHDA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_N6auWO2dUrbWwcTes1mTW25bSGkAKvhVg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GiUTwzKTCsOlKqzl3ACY6ib7b0LvR3WLNA&s"
  ]

  const [active, setActive] = useState(0)

  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     loadNextImage()
  //   }, 3000)

  //   return () => clearInterval(timer)
  // }, [])

  const loadNextImage = () => {
    setActive(active => (active + 1) % images.length)
  }

  const loadPrevImage = () => {
    setActive((active) => (active - 1 < 0 ? images.length - 1 : active - 1))
  }

  return (
    <div>
      <div>
        <img 
          onClick={loadPrevImage}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR080qTd6YL4kMlxrppROhR2zyNnTxnWekXig&s" alt="left-arrow"
          className='w-20 h-20 cursor-pointer'
        />
        <img src={images[active]} alt='wallpaper' className='w-[600px] h-[370px]'/>
        <img 
          onClick={loadNextImage}
          src="https://cdn-icons-png.freepik.com/512/10944/10944633.png" 
          alt="right-arrow"
          className='w-14 h-14 my-2 cursor-pointer'
        />
      </div>
    </div>
  )
}

export default ImageSlider


