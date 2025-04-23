import React, { useEffect, useState } from 'react'

const SearchUi = () => {
  const [searchText, setSearchText] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isResultVisible, setIsResultVisible] = useState(false)
  const [cache, setCache] = useState({})
  
  useEffect(() => {
    const s = setTimeout(() => {
      fetchData()
    }, 300)

    return () => clearTimeout(s)
  }, [searchText])

  const fetchData = async () => {
    if(cache[searchText]){
      setSearchResults(cache[searchText])
    }else{
      let data = await fetch("https://www.google.com/complete/search?client=firefox&q=" + searchText)
      let json = await data.json()
      console.log(json[1])
      setCache(prev => ({ ...prev, [searchText]: json[1] }))
      setSearchResults(json[1])
    }
  }

  return(
    <div style={{marginLeft:"50px"}}>
      <h3 style={{color:"goldenrod", fontWeight:"bolder", fontSize:"20px"}}>AutoComplete Search Bar</h3>
      <div style={{position:"relative"}}>
       <span style={{position:'absolute', left:"8px", top:"14px"}}>🔍</span>
       <input 
         type='text'
         value={searchText}
         onChange={e => setSearchText(e.target.value)}
         onFocus={() => setIsResultVisible(true)}
         onBlur={() => setIsResultVisible(false)}
         style={{width:"30%", marginTop:"10px", border:"1px solid gray", borderRadius:"2px", padding:"3px", paddingLeft:"40px"}}
       />
       {searchText.length > 0 && (
        <span 
        style={{position:"absolute", left:"362px", top:"14px", cursor:"pointer"}}
        onClick={() => setSearchText("")}
        >
          ✖
        </span>
       )}
      </div>
      {searchResults.length > 1 && isResultVisible && (
        <ul 
          style={{border:"1px solid gray", width:"30%", padding:"5px", borderRadius:"2px"}}
        >
          {searchResults.map((r) => 
            <li key={r} className="cursor-pointer hover:bg-gray-200">
              {r}
            </li>
          )}
        </ul>
      )} 
    </div>
  )
}

export default SearchUi
