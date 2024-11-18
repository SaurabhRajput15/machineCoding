import React, { useEffect, useState } from "react";

const DataFetching = () => {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  useEffect(() => {
    fetchData()
  }, [idFromButtonClick])

  const fetchData = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    const json = await data.json()

    setPost(json)
  }

  const handleClick = () => {
     setIdFromButtonClick(id)
  }

    return(
        <div>
            <input 
              type="text" 
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button onClick={handleClick}>Fetch Post</button>
            <div><h4>{post.title}</h4></div>
            {/* <ul>
             {
                posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))
             }
            </ul> */}
        </div>
    )
}

export default DataFetching