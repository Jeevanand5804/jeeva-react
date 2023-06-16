import React,{useState,useEffect} from 'react'

function UseEffect_fetch1() {
    const [postData, setPostData] = useState({});
   useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/posts/1")
       .then((response) => response.json())
       .then((data) => setPostData(data));
   }, []);
  return (
      <div>
          <h2>{postData.title}</h2>
          <p>{postData.body}</p>
    </div>
  )
}

export default UseEffect_fetch1