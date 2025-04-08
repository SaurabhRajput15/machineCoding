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

// import "./styles.css";
// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [posts, setPosts] = useState([]);
//   const [searchItem, setSearchItem] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, [posts]);

//   const filteredItem = posts.filter((item) =>
//     item.title.toLowerCase().includes(searchItem?.toLowerCase() || "")
//   );

//   const fetchData = async () => {
//     let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let json = await data.json();
//     setPosts(json);
//   };

//   return (
//     <div className="App">
//       <input
//         type="text"
//         value={searchItem}
//         onChange={(e) => setSearchItem(e.target.value)}
//       />
//       <ul>
//         {filteredItem.map((item) => (
//           <li key={item.id}>
//             <h3>{item.title}</h3>
//             <p>{item.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
