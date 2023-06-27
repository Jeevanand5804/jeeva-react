import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'

function PostDetailsChild() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  const handlePostClick = (postId) => {
    navigate(`/post-detail/${postId}`);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center w-100">
      <div className="card shadow">
        <div className="card-body p-4">
          <h3 className="card-title">Post Details</h3> 
          <ul className="post-list">
            {posts.map((post) => (
              <li
                key={post.id}
                onClick={() => handlePostClick(post.id)}
                className="post-item"
              >
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PostDetailsChild;
