import React from 'react'

const Shimmer = () => {
  return Array(12).fill(0).map((n, i) => 
    <div key={i} style={{padding:"5px", margin:"11px", border:"1px solid black", borderRadius:"5px"}}>
       <div style={{height:"190px", width:"190px", backgroundColor:"lightgray"}}></div>
    </div>
  )
}

export default Shimmer