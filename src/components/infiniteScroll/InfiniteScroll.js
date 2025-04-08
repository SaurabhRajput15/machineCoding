import React, { useEffect, useState } from "react"
import MemeCart from "./MemeCart"
import Shimmer from "./Shimmer"

const InfiniteScroll = () => {
    const [memes, setMemes] = useState([])
    const [showShimmer, setShowShimmer] = useState(false)

    useEffect(() => {
       fetchMeme()

       window.addEventListener("scroll", handleScroll)

       return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleScroll = () => {
        if(window.innerHeight + window.scrollY === document.body.scrollHeight){
            fetchMeme()
        }
    }

    const fetchMeme = async () => {
       setShowShimmer(true)
       const data = await fetch("https://meme-api.com/gimme/20")
       const json = await data.json()

       setShowShimmer(false)
       setMemes((memes) => [...memes, ...json.memes])
    }

    return(
        <div style={{display:"flex", flexWrap:"wrap"}}>
           {memes.map((meme, i) => <MemeCart key={i} data={meme}/>)}

           {showShimmer && <Shimmer />}
        </div>
    )
}

export default InfiniteScroll