import React from 'react'

const MemeCart = ({data}) => {

  const {url, title, author} = data
  return (
    <div style={{padding:"5px", margin:"11px", border:"1px solid black", borderRadius:"5px"}}>
        <img src={url} alt='memes' style={{height:"190px", width:"190px"}}/>
        <p>{author}</p>
    </div>
  )
}

export default MemeCart