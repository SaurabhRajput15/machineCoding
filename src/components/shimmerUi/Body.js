import React, { useEffect, useState } from 'react'
import ShimmerUi from './ShimmerUi'
import MemeCard from './MemeCard'

const Body = () => {
  const [memes, setMemes] = useState([])
  const [showShimmer, setShowShimmer] = useState(false)

   useEffect(() => {
    fetchMemes()
    
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
   }, [])

   const handleScroll = () => {
      if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
        fetchMemes()
      }
   }

   const fetchMemes = async () => {
    setShowShimmer(true)

    let data = await fetch("https://meme-api.com/gimme/40")
    let json = await data.json()

    setShowShimmer(false)
    setMemes((memes) => [...memes, ...json.memes])
   }

  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
      {memes.map((meme, i) => <MemeCard key={i} data={meme} />)}

      {showShimmer && <ShimmerUi />}
    </div>
  )
}

export default Body    //i am doing infinite scroll and shimmerUi Machine code doing in same file