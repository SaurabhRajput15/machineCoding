import React from 'react'

const ProductCard = ({
    title,
    price,
    description,
    thumbnail,
    discountPercentage
}) => {
  return (
    <div style={{margin:"13px", padding:"10px", border:"2px solid gray", objectFit:"contain", width:"310px", borderRadius:'5px', textAlign:"center"}}>
        <div style={{display:"flex", justifyContent:"center"}}>
          <img src={thumbnail} alt='thumbnail'style={{width:"196px"}}/>
        </div>
        <h2 style={{fontWeight:"bold", fontSize:"20px"}}>{title}</h2>
        <h3 style={{fontWeight:"bold", color:"goldenrod"}}>${price} - discount of {discountPercentage}</h3>
        <p style={{fontSize:"16px", color:"gray"}}>{description}</p>
    </div>
  )
}

export default ProductCard