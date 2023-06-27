import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

function GetPost() {
  const [id, setId] = useState(1);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleButtonClick = () => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    console.log("post changed:", post);
    if (post) {
      setIsLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((response) => response.json())
        .then((data) => setComments(data))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [post]);

  return (
    <>
      <div className="postinput container bg-secondary">
        <label>
          Enter post ID:
          <input
            className="form-control"
            type="number"
            value={id}
            onChange={handleIdChange}
          />
        </label>
        <button
          type="submit"
          className="btn btn-primary mt-2 mb-2"
          onClick={handleButtonClick}
        >
          Show post
        </button>
      </div>

      {isLoading && (
        <div className="spinner-border text-primary load" role="status">
          <span className="sr-only"></span>
        </div>
      )}

      <div className="container">
        {post && (
          <div style={{ padding: "10px" }}>
            <h2>Post:</h2>
            <h4
              style={{
                color: "blue",
                fontStyle: "italic",
                textDecorationLine: "underline",
              }}
            >
              {post.title}
            </h4>
            <p>{post.body}</p>
            <h2>Comments:</h2>
            {comments ? (
              // <ol type="1">
              <div className="comment">
                {comments.map((comment) => (
                  <h5 key={comment.id}> {comment.body} </h5>
                ))}
              </div>
            ) : (
              // <div className="spinner-border text-primary" role="status">
              //   <span className="sr-only">Loading...</span>
              // </div>
              // <h3>
              //     <BiLoaderAlt />
              <p>Loading....</p>

              //   {/* <Loader type="Puff" color="#00BFFF" height={100} width={100} /> */}
              // </h3>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default GetPost;
