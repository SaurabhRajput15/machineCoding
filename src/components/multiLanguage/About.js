import React from 'react'
import { LANG } from '../../utils/langConstant'

const About = ({lang}) => {
  console.log(lang)
  const data = LANG[lang]
  return (
    <div style={{textAlign:"center", margin:"8px"}}>
        <div style={{border:"2px solid gray", marginTop:"5px", padding:"10px", borderRadius:"5px"}}>
           <h3 style={{fontSize: "20px", fontWeight:"bold", color:"goldenrod", marginBottom:"4px", borderRadius:"5px"}}>{data.title}</h3>
           <p>{data.desc}</p>
        </div>
        <div style={{border:"2px solid gray", marginTop:"5px", padding:"10px", borderRadius:"5px"}}>
           <h3 style={{fontSize: "20px", fontWeight:"bold", color:"goldenrod", marginBottom:"4px"}}>{data.title2}</h3>
           <p>{data.desc2}</p>
        </div>
        <div style={{border:"2px solid gray", marginTop:"5px", padding:"10px", borderRadius:"5px"}}>
           <h3 style={{fontSize: "20px", fontWeight:"bold", color:"goldenrod", marginBottom:"4px"}}>{data.title3}</h3>
           <p>{data.desc3}</p>
        </div>
    </div>
  )
}

export default About