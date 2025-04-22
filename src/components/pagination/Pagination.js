import React, { useEffect, useState } from 'react'
import ProductCard from "./ProductCard"

const LIMIT = 16;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [products, setProducts] = useState([])
  const [noOfPages, setNoOfPages] = useState(0)

  useEffect(() => {
    fetchProducts()
  }, [currentPage])
  
  const fetchProducts = async () => {
    let data = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage * LIMIT}&select=id,title,price,description,thumbnail,discountPercentage`)
    let json = await data.json()
    // console.log(json)
    setProducts(json.products)
    setNoOfPages(Math.ceil(json.total / LIMIT))
    // console.log(json.total)
  }

  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
       {products.map((product) => (
          <ProductCard 
             key={product.id} 
             {...product}
          />
        ))}
        <div style={{padding:"10px", marginBottom:"10px", cursor:"pointer", marginLeft:"3px"}}>
          {currentPage > 0 && (
           <span 
            style={{fontSize:'20px'}}
            onClick={() => {setCurrentPage((currentPage) => currentPage - 1)}}
           >
             Prev
           </span>
          )}
          {[...Array(noOfPages).keys()].map((pN) => (
            <span 
              key={pN} 
              style={{
                padding: "10px",
                fontSize:"20px",
                fontWeight: pN === currentPage ? "bolder" : "normal",
                color: pN === currentPage ? "black" : "gray",
                textDecoration: pN === currentPage ? "underline" : "none",
                cursor: "pointer"
              }}
              onClick={() => setCurrentPage(pN)}
            >
               {pN + 1}
             </span>
          ))}
          {currentPage < noOfPages - 1 && (
            <span 
            style={{fontSize:'20px'}}
            onClick={() => {setCurrentPage((currentPage) => currentPage + 1)}}
          >
            Next
          </span>
          )}
        </div>
    </div>
  )
}

export default Pagination