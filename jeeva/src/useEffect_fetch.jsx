import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

function UseEffect_fetch() {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=2")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        const postId = data[0].postId; // Get the post ID from the first comment
        return fetch(`https://jsonplaceholder.typicode.com/posts/2`);
      })
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  },[]);

  return (
      <div>
      {post && <h1>{post.title}</h1>}
      {comments.map((comment) => (
        <p key={comment.id}>{comment.body}</p>
      ))}
    </div>
  );
}

export default UseEffect_fetch;
