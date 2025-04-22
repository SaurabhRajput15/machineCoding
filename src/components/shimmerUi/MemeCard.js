import React from 'react'

const MemeCard = ({data}) => {

   const {url, author} = data
    
  return (
    <div style={{border:"1px solid gray", margin:"10px", padding:"5px", borderRadius:"4px"}}>
        <img src={url} alt='meme-img' style={{width:"230px", height:"180px"}} />
        <p style={{textAlign:"center", backgroundColor:"goldenrod", color:"white", marginTop:"2px"}}>{author}</p>
    </div>
  )
}

export default MemeCard