import React, { useEffect, useState } from 'react'

const DataFetching = () => {
  const [post, setPost] = useState([])
  const [id, setId] = useState(1)
  const [idFromButtonClicked, setIdFromButtonClicked] = useState(1)

  const fetchData = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClicked}`)
    const json = await data.json()
    setPost(json)
  }

  const handleFetchData = () => {
    setIdFromButtonClicked(id)
  }
  
  useEffect(() => {
    fetchData()
  }, [idFromButtonClicked])

  return (
    <div style={{textAlign:"center"}}>
       <input 
         type='text'
         value={id}
         onChange = {e => setId(e.target.value)}
         style={{border:"1px solid grey", width:"20%", margin:"10px", padding:"3px", borderRadius:"5px"}}
       />
       <button 
         onClick={handleFetchData}
         style={{padding:"3px", backgroundColor:"lightcoral", borderRadius:"5px", fontWeight:"bold",}}
       >
         Fetch Post
       </button>
       <div 
         style={{display:"flex", justifyContent:"center", marginTop:"10px"}}
       >
        <h4 style={{border:"2px solid grey", padding:"6px", fontWeight:"bold", color:"goldenrod", borderRadius:"10px"}}>{post.title}</h4>
       </div>
    </div>
  )
}

export default DataFetching

// import React, { useEffect, useState } from 'react'

// const MachineCode = () => {
//   const [posts, setPosts] = useState([])
//   const [searchResult, setSearchResult] = useState("")

//   const fetchData = async () => {
//     const data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const json = await data.json()
//     setPosts(json)
//   }

//   const filteredItem = posts.filter(item => item.title.toLowerCase().includes(searchResult.toLowerCase()))

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div style={{textAlign:"center"}}>
//       <h3 style={{fontWeight:"bolder", color:"goldenrod", fontSize:"30px"}}>Fetch Post</h3>
//       <input 
//           type='text'
//           value={searchResult}
//           onChange={e => setSearchResult(e.target.value)}
//           style={{border:"1px solid grey", width:"30%", padding:'3px', borderRadius:"5px"}}
//       />
//       <div style={{display:"flex", justifyContent:"center"}}>
//         <ul style={{width:"80%"}}>
//           {filteredItem.map((item) => (
//             <li style={{border:"1px solid gray", marginTop:"10px", borderRadius:"5px"}}>
//               <h3 style={{fontWeight:"bolder", color:"grey", fontSize:"20px"}}>{item.title}</h3>
//               <p>{item.body}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default MachineCode
