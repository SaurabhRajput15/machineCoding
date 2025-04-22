import React from 'react'

const ShimmerUi = () => {
  return Array(15).fill(0).map((n, i) => (
    <div key={i} style={{border:"1px solid gray", margin:"10px", padding:"5px", borderRadius:"4px"}}>
        <div style={{width:"230px", height:"180px", backgroundColor:"lightgrey", marginTop:"10px", borderRadius:"4px"}}></div>
    </div>
  ))
}

export default ShimmerUi